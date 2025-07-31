// 'use client';
// import { FormEvent, useState } from "react";
// import generateRecipe from "@/actions/generateRecipe";
//  // ✅ Import the server action
// export default function CreatePage() {
//   const [ingredients, setIngredients] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false); // ✅ Typo fixed: setLoding → setLoading

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       console.log(ingredients);
//       generateRecipe(ingredients); // ✅ Call the server action
//       // You can call an API here and pass `ingredients`
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="h-screen bg-gradient-to-r from-green-200 to-amber-200">
//       <h1 className="text-3xl font-bold pt-5 ml-5 font-serif">
//         Generate a new recipe
//       </h1>

//       <div className="flex flex-col items-center">
//         <form onSubmit={handleSubmit} className="flex flex-col w-96">
//           <label
//             htmlFor="ingredients"
//             className="font-bold text-lg text-center underline mt-10"
//           >
//             Which ingredients would you like to use?
//           </label>
//           <textarea
//             onChange={(e) =>
//               setIngredients(e.target.value.split(",").map(item => item.trim()))
//             }
//             id="ingredients"
//             className="border mt-2 p-2 font-sans h-32 resize-none"
//             placeholder="Enter ingredients separated by commas (e.g. rice, chicken, peppers)"
//             required
//           />

//           <input
//             type="submit"
//             value={loading ? "Generating..." : "Generate Recipe"}
//             disabled={loading}
//             className="mt-5 border rounded bg-green-500 text-white p-2 hover:border-green-800 hover:cursor-pointer disabled:opacity-50"
//           />
//         </form>
//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from "react";

type RecipeResult = {
  title: string;
  imageUrl?: string;
  html: string;
};

export default function CreateRecipePage() {
  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [diet, setDiet] = useState('');
  const [result, setResult] = useState<RecipeResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch("/api/deepseek", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ingredients: ingredients.split(',').map(i => i.trim()).filter(Boolean)
        }),
      });

      if (!res.ok) {
        throw new Error(`Failed to generate recipe. Status ${res.status}`);
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create AI-Powered Recipe</h1>

      <textarea
        className="w-full border rounded p-2"
        rows={4}
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
        placeholder="Enter ingredients, comma separated"
      />

      {/* <div className="flex flex-col sm:flex-row gap-4 mt-3">
        <select
          className="border p-2 rounded"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        >
          <option value="">Select Cuisine</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
          <option value="Chinese">Chinese</option>
        </select>

        <select
          className="border p-2 rounded"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
        >
          <option value="">Select Diet</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Keto">Keto</option>
        </select>
      </div> */}

      <button
        onClick={handleGenerate}
        className="bg-green-600 text-white px-80 py-3 rounded mt-3 disabled:opacity-80"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>

      {error && (
        <p className="text-red-600 mt-3">{error}</p>
      )}

      {result && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">{result.title || 'Untitled Recipe'}</h2>

          {result.imageUrl && (
            <img
              src={result.imageUrl}
              alt={result.title || 'Recipe image'}
              className="mt-4 rounded"
            />
          )}

          <div
            className="mt-4 prose prose-green"
            dangerouslySetInnerHTML={{ __html: result.html }}
          />
        </div>
      )}
    </div>
  );
}


