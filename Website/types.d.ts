export interface RecipePost {
  title: string;
  image: string;
  servings: string;
  prepTime: string;
  cookTime: string;
  directions: string;
  ingredients: string;
  tags: string[];
  comments: { author: string; text: string; }[];
  suggestions: { author: string; text: string; }[];
  date: string;
  author: string;
  excerpt: string;
}
