import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Your Make.com webhook URL
    const webhookUrl = "https://hook.eu2.make.com/ubjoe44to3qqglo07w459fp65nvzjeth";

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json(
        { error: "Failed to send data to Make.com" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
