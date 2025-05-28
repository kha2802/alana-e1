import Link from "next/link";
import { getArticles } from "../../lib/articles";

export default async function TinTucPage() {
  const articles = await getArticles();

  return (
    <main style={{ padding: "20px" }}>
      <h1>Danh sách Tin Tức</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id} style={{ marginBottom: "15px" }}>
            <Link href={`/tin-tuc/${article.id}`}>
              <a style={{ fontWeight: "bold", fontSize: "18px" }}>{article.title}</a>
            </Link>
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
