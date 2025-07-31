// import { NextRequest, NextResponse } from "next/server";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(req: NextRequest) {
//   const { ingredients } = await req.json();

//   if (!ingredients || !Array.isArray(ingredients)) {
//     return NextResponse.json({ error: "Invalid ingredients" }, { status: 400 });
//   }

//   const prompt = `
// You are a professional chef. Based on the following ingredients: ${ingredients.join(
//     ", "
//   )}, create a detailed recipe. Include:

// - Recipe title
// - Ingredients list
// - Step-by-step instructions
// - Serving size
// - Optional cooking tips
// `;

//   try {
//     const completion = await openai.chat.completions.create({
//       model: process.env.OPENAI_MODEL || "gpt-4",
//       messages: [{ role: "user", content: prompt }],
//     });

//     const result = completion.choices[0]?.message?.content || "No recipe generated.";
//     return NextResponse.json({ recipe: result });
//   } catch (err) {
//     console.error("OpenAI Error:", err);
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//   }
// }

// export async function GET() {
//   return NextResponse.json({ message: "Hello from API" });
// }

// // export async function POST(req: NextRequest) {
// //   const { ingredients } = await req.json();

// //   const webhookUrl = process.env.N8N_WEBHOOK_URL!;
  
// //   const res = await fetch(webhookUrl, {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: JSON.stringify({ ingredients }),
// //   });

// //   const data = await res.json();
// //   return NextResponse.json(data);
// // }
