import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY!;

export async function POST(req: NextRequest) {
  const { ingredients } = await req.json();

  if (!ingredients || !Array.isArray(ingredients)) {
    return NextResponse.json({ error: "Invalid ingredients" }, { status: 400 });
  }

  const prompt = `
You are a professional chef. Based on these ingredients: ${ingredients.join(", ")},
write a recipe with:
- Title
- Ingredients
- Step-by-step Instructions
- Serving size
Respond in plain text format.
`;

  try {
    // 🍳 Step 1: Get Recipe Text
    const recipeResponse = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
        },
      }
    );

    const reply = recipeResponse.data.choices?.[0]?.message?.content;

    if (!reply) {
      return NextResponse.json({ error: "No response from model" }, { status: 500 });
    }

    // 📃 Parse Recipe Title + HTML Content
    const [firstLine, ...rest] = reply.trim().split("\n");
    const title = firstLine.replace(/^#+\s*/, '').trim(); // clean markdown
    const html = rest.join("\n").replace(/\n/g, "<br />");

    // 🖼️ Step 2: Generate Image
    // const imagePrompt = `High-quality photo of a dish made with ${ingredients.join(", ")}`;

    // const imageResponse = await axios.post(
    //   "https://openrouter.ai/api/v1/images/generations",
    //   {
    //     prompt: imagePrompt,
    //     n: 1,
    //     size: "512x512",
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${OPENROUTER_API_KEY}`,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    // const imageUrl = imageResponse.data.data?.[0]?.url;

    // ✅ Final Response
    return NextResponse.json({
      title,
      html,
    //   imageUrl,
    });
  } catch (err: any) {
    console.error("[DeepSeek Error]", err.response?.data || err.message);
    return NextResponse.json(
      { error: "Failed to generate recipe or image" },
      { status: 500 }
    );
  }
}
