import { notFound } from "next/navigation";
import { recipes } from "@/app/data/recipes";

export default function RecipeDetailPage({ params }: { params: { slug: string } }) {
    console.log("RecipeDetailPage params:", params);
    
  const recipe = recipes.find((r) => r.slug === params.slug);

  if (!recipe) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} className="w-24 h-24 object-contain rounded mb-4" />

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal list-inside space-y-2">
        {recipe.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
