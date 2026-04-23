import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Import all data from the portfolio to feed to the AI
import { 
  HERO, NAV, STATS, ABOUT_IMAGES, ABOUT_HIGHLIGHTS, 
  ABOUT_ROLES, ABOUT_EDUCATION, ABOUT_QUICK_FACT, 
  EXPERIENCE, TECHFLUENCE, OTHER_EVENTS, STARTUPS, 
  PROGRAM_CARDS, PROGRAM_GALLERY, SKILLS_TECH, 
  SKILLS_PM, SKILLS_TOOLS, KEY_PROJECT, ACHIEVEMENTS, 
  CERTS, PEOPLE, SOCIAL_COMMENTS, TESTIMONIALS, 
  VIDEO_TESTIMONIALS, PODCASTS, CONTACT, SOCIAL_LINKS 
} from '../../lib/data';

// Create a custom OpenAI client pointing to OpenRouter
const openrouter = createOpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY || "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",
  // OpenRouter requires standard HTTP headers for OpenAI compatibility depending on the fetch call,
  // but Vercel AI SDK handles it smoothly. We'll set a default header just in case.
  headers: {
    'HTTP-Referer': 'https://souhardyabose.com', // Optional, for including your app on openrouter.ai rankings.
    'X-Title': 'Souhardya Bose Portfolio',       // Optional. Shows in rankings on openrouter.ai.
  }
});

// Compile all the data into an optimized JSON string for the system prompt
const PORTFOLIO_DATA = JSON.stringify({
  HERO, NAV, STATS, ABOUT_HIGHLIGHTS, ABOUT_ROLES, 
  ABOUT_EDUCATION, EXPERIENCE, TECHFLUENCE, OTHER_EVENTS, 
  STARTUPS, SKILLS_TECH, SKILLS_PM, SKILLS_TOOLS, 
  KEY_PROJECT, ACHIEVEMENTS, CERTS, PEOPLE, 
  TESTIMONIALS, PODCASTS, CONTACT, SOCIAL_LINKS
});

const SYSTEM_PROMPT = `You are a helpful, professional, and friendly AI assistant representing Souhardya Bose directly embedded on his portfolio website.
Your job is to answer questions about Souhardya's experience, background, skills, events, and projects.

Here is EVERYTHING you need to know about Souhardya Bose in JSON format:
${PORTFOLIO_DATA}

Guidelines for responding:
1. Always be polite, professional, and confident.
2. If asked about your identity, say you are Souhardya's personal AI assistant.
3. If asked about his work, reference the specific startups, roles, or organizations in the JSON data.
4. Keep your answers relatively concise — don't overwhelm the user with long technical walls of text unless explicitly asked. Short paragraphs and bullet points are ideal.
5. If the user asks how to reach him, provide the details from the CONTACT object (Email, Phone, LinkedIn).
6. Never make up information. If something isn't in the provided data, politely say you don't have that information but they can reach out to him directly.
7. Use emojis tastefully to make the conversation engaging.
`;

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: openrouter('meta-llama/llama-3.1-8b-instruct:free'), // Fallback to a fast, reliable model on OR
      system: SYSTEM_PROMPT,
      messages,
      temperature: 0.7,
      maxTokens: 500,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Chatbot API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to connect to the AI model. Please try again later.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
