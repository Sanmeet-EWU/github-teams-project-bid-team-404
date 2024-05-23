// src/dataFetch.js
import { getCollection } from 'astro:content';

export async function fetchRecipes() {
  const posts = await getCollection('recipes');
  return posts.map((post) => ({
    ...post,
    data: {
      ...post.data,
      servings: post.data.servings || '',
      prepTime: post.data.prepTime || '',
      cookTime: post.data.cookTime || '',
      directions: post.data.directions || '',
      ingredients: post.data.ingredients || '',
      tags: post.data.tags || [],
      comments: post.data.comments || [],
      suggestions: post.data.suggestions || []
    }
  }));
}
