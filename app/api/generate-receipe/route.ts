import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// Load the Gemini API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  const { ingredients } = await req.json();

  if (!ingredients || !Array.isArray(ingredients)) {
    return NextResponse.json({ error: "Invalid ingredients" }, { status: 400 });
  }

  const prompt = `
You are a professional chef. Based on these ingredients: ${ingredients.join(
    ", "
  )}, write a detailed recipe with:
- Title
- Ingredients
- Step-by-step Instructions
- Serving size
`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const text = result.response.text();

    return NextResponse.json({ recipe: text });
  } catch (err: any) {
    console.error("[Gemini Error]:", err);
    return NextResponse.json({ error: err.message || "Failed to generate recipe" }, { status: 500 });
  }
}
