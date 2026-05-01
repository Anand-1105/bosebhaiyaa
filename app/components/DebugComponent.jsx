import React, { useEffect } from 'react';
import { useChat } from '@ai-sdk/react';

export default function DebugComponent() {
  const chat = useChat({ api: '/api/chat' });
  
  useEffect(() => {
    console.log('useChat keys:', Object.keys(chat));
  }, [chat]);

  return null;
}
