import path from 'path';
import fs from 'fs/promises';
import { Article } from '../interfaces/article';  // import interface

const dataPath = path.join(process.cwd(), 'src', 'data', 'articles.json');

export async function getArticles(): Promise<Article[]> {
  const jsonData = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(jsonData);
}

export async function getArticleById(id: string): Promise<Article | undefined> {
  const articles: Article[] = await getArticles();
  return articles.find((article: Article) => article.id === id);
}
