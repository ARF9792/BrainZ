// File: app/api/ai/route.ts

import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

// This function will handle POST requests to /api/ai
export async function POST(request: Request) {
  // Make sure your Gemini API key is in your .env.local file
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    // Get the request body from the frontend call
    const { messages, cardContext } = await request.json();

    if (!messages || !cardContext) {
      return NextResponse.json(
        { error: "Missing messages or cardContext" },
        { status: 400 }
      );
    }

    // This is the same logic from your Express backend
    const systemInstruction = `You are a helpful assistant. The user is asking about a card with the title "${cardContext.title}" and the URL "${cardContext.url}". Use the information just as a reference from this URL to answer their questions and give complete information about whatever is asked no matter if you have to search internet for it. If the user asks a general question, use the content from the URL as the primary context for your answer.`;
    
    // The last message is the new prompt
    const lastMessage = messages.pop();

    const chatHistory = messages.map((msg: { role: string, content: string }) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const chat = model.startChat({
      history: [
        { role: 'user', parts: [{ text: systemInstruction }] },
        { role: 'model', parts: [{ text: "Understood. I'm ready to help with that context." }] },
        ...chatHistory
      ]
    });

    const result = await chat.sendMessage(lastMessage.content);
    const response = result.response;
    const replyText = response.text();

    // Send the response back to the frontend
    return NextResponse.json({ reply: replyText });

  } catch (error) {
    console.error("Gemini API Error in Next.js route:", error);
    return NextResponse.json(
      { error: "An error occurred while communicating with the AI." },
      { status: 500 }
    );
  }
}