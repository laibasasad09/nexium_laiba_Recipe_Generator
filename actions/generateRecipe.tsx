'use server';
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export default async function generateRecipe(ingredients: string[]) {
  try {
    const cleanedIngredients = ingredients.map(i => i.trim()).filter(Boolean);

    const recipePrompt = `
Create a detailed recipe based only on the following ingredients: ${cleanedIngredients.join(', ')}

Give the recipe a title.
Format the recipe in an HTML body with semantic elements.
Give back the result in JSON as follows:
{
  "title": "Recipe Title",
  "recipe": "Recipe content in HTML format"
}
Don't add any other text before or after the JSON.
`;

    // Generate the recipe with GPT-4o
    const recipeCompletion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: recipePrompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });

    const content = recipeCompletion.choices[0].message.content as string;

    // Parse the JSON content returned by GPT
    const recipeData = JSON.parse(content);
    const recipeTitle = recipeData.title;
    const recipeHtml = recipeData.recipe;

    if (!recipeTitle || !recipeHtml) {
      throw new Error("Missing title or recipe content from OpenAI response.");
    }

    // Generate a recipe image using DALL·E 3
    const imagePrompt = `${recipeTitle}, professional food photography, high quality, vibrant colors, detailed textures, appetizing presentation`;

    const imageCompletion = await openai.images.generate({
      model: "dall-e-3",
      prompt: imagePrompt,
      size: "1024x1024",
      quality: "standard",
      n: 1,
    });

    // Safe access of image URL
    const imageUrl = imageCompletion?.data?.[0]?.url;

    if (!imageUrl) {
      throw new Error("Image generation failed: No image URL returned.");
    }

    // Final response
    return {
      title: recipeTitle,
      html: recipeHtml,
      imageUrl: imageUrl,
    };

  } catch (error) {
    console.error("Error generating recipe:", error);
    throw error;
  }
}

