import IArticle from "@/interfaces/IArticle";

export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/article`);
    const rs = await res.json();
    const articles: IArticle[] = rs.data;

    // Tạo một danh sách các đường dẫn tĩnh cho từng bài viết
    return articles.map((article: IArticle) => ({
        id: article.id+'',
    }));
}