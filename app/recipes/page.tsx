import Link from "next/link";
import Image from "next/image";
import { recipes } from "@/app/data/recipes";

export default function RecipeListPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Famous Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.slug}
            href={`/recipes/${recipe.slug}`}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={recipe.imageUrl}
              alt={recipe.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{recipe.ingredients.slice(0, 3).join(", ")}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
