import path from 'path';
import fs from 'fs/promises';

const dataPath = path.join(process.cwd(), 'src', 'data', 'articles.json');

export async function getArticles() {
  const jsonData = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(jsonData);
}

export async function getArticleById(id: string) {
  const articles = await getArticles();
  return articles.find(article => article.id === id);
}
