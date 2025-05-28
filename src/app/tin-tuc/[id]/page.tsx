import { getArticleById } from "../../../lib/articles";

interface PageProps {
  params: { id: string };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticleById(params.id);

  if (!article) {
    return (
      <main style={{ padding: "20px" }}>
        <h2>Bài viết không tồn tại</h2>
      </main>
    );
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>{article.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: article.content }} />
    </main>
  );
}
