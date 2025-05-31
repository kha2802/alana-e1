export const dynamicParams = true;

import { newsData } from "@/data/newsData";

interface Params {
  params: {
    slug: string;
  };
}

export default function NewsDetailPage({ params }: Params) {
  const newsItem = newsData.find((item) => item.slug === params.slug);

  if (!newsItem) {
    return <p style={{ padding: 20 }}>Bài viết không tồn tại.</p>;
  }

  return (
    <main style={{ padding: 20, maxWidth: 700, margin: "auto" }}>
      <h1>{newsItem.title}</h1>
      <time style={{ fontSize: 14, color: "#888" }}>{newsItem.date}</time>
      <img
        src={newsItem.imageUrl}
        alt={newsItem.title}
        style={{ width: "100%", maxHeight: 400, objectFit: "cover", margin: "20px 0" }}
      />
      <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
      <p>
        <a href="/tin-tuc" style={{ color: "#0070f3" }}>
          &larr; Quay lại trang tin tức
        </a>
      </p>
    </main>
  );
}
