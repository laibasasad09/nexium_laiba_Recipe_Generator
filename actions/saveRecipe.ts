'use server';

import { getDb } from "../app/lib/mongodb";
export async function saveRecipeToDb(userId: string, recipeData: any) {
  const db = await getDb();
  const collection = db.collection("recipes");
  await collection.insertOne({
    userId,
    ...recipeData,
    createdAt: new Date()
  });
}