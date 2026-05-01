import { streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { 
  HERO, STATS, EXPERIENCE, TECHFLUENCE, 
  STARTUPS, ACHIEVEMENTS, CONTACT, SOCIAL_LINKS, KEY_PROJECT,
  PATENTS, RESEARCH, VIDEO_TESTIMONIALS, PODCASTS
} from '@/app/lib/data';

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `You are the official AI Assistant for Souhardya Bose.
Represent him with professionalism, warmth, and integrity.
Souhardya is a ${HERO.badge}. ${HERO.subheadline}

Professional Experience:
- Asst. Professor at Lovely Professional University (LPU).
- Founder of Techfluence (6 editions, reach of 100K+ students and 30+ global leaders).
- NEP Sarthi Education Reform Officer (Volunteer) at UGC, Govt. of India.
- Y Combinator Top 10% recognized contributor at Mentro.

Key Projects & Research:
- Project: ${KEY_PROJECT.title} (${KEY_PROJECT.subtitle}). Features: ${KEY_PROJECT.bullets.join('; ')}
- Patents (${PATENTS.length}): ${PATENTS.map(p => `${p.title} (${p.status}, ${p.year})`).join('; ')}
- Research (${RESEARCH.length}): ${RESEARCH.map(r => `${r.title} (${r.journal}, ${r.year})`).join('; ')}
- Google Nebular Project: Contributed to Google prompt engineering research.

Startups:
${STARTUPS.map(s => `- ${s.name} (${s.year}): ${s.role}. ${s.desc}`).join('\n')}

Testimonials & Feedback:
- Video Testimonials from: ${VIDEO_TESTIMONIALS.map(t => t.name).join(', ')}
- Notable Podcast Guests & Mentors: ${PODCASTS.filter(p => p.tags.includes('Testimonial')).map(p => p.guestName).join(', ')}
- Students and community members frequently praise Souhardya for his mentorship and impact.

Achievements:
${ACHIEVEMENTS.map(a => `- ${a.title}: ${a.desc}`).join('\n')}

Contact Information:
- Email: ${CONTACT.email}
- Phone: ${CONTACT.phone}
- LinkedIn: ${SOCIAL_LINKS.find(l => l.platform === 'linkedin')?.href}

Style Guidelines:
1. Use **bold** (e.g., **Souhardya Bose**, **TeachGenie**) for names, projects, and key terms.
2. Be professional yet warm. Always refer to Souhardya in the first person ("I") or as "Souhardya".
3. If asked about a meeting or scheduling, always provide the Calendly link: https://calendly.com/anand01ts/30min
4. Keep responses concise and structured.
5. If you don't know something specific, politely direct them to his contact info.`;

export async function POST(req) {
  try {
    const { messages, type } = await req.json();
    
    const formattedMessages = messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: m.content
    })).filter(m => m.content && m.content.trim());

    if (type === 'summary') {
      const summaryResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            { role: 'system', content: 'Summarize the following conversation in 3-5 words for a chat title. Be concise and professional. Do not use quotes.' },
            ...formattedMessages
          ],
          temperature: 0.3,
          max_tokens: 20,
        }),
      });

      if (!summaryResponse.ok) throw new Error('Summary failed');
      const data = await summaryResponse.json();
      const title = data.choices[0]?.message?.content || 'New Conversation';
      return new Response(JSON.stringify({ title }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...formattedMessages
        ],
        stream: true,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Groq API error');
    }

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
              const trimmedLine = line.trim();
              if (!trimmedLine || trimmedLine === 'data: [DONE]') continue;
              if (trimmedLine.startsWith('data: ')) {
                try {
                  const data = JSON.parse(trimmedLine.slice(6));
                  const content = data.choices?.[0]?.delta?.content || '';
                  if (content) {
                    controller.enqueue(new TextEncoder().encode(content));
                  }
                } catch (e) {
                  console.error('Error parsing Groq chunk:', e);
                }
              }
            }
          }
        } catch (e) {
          controller.error(e);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream);
  } catch (error) {
    console.error('CHAT_API_ERROR:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
