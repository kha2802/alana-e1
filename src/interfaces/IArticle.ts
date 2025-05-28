export default interface IArticle {
  id?: number;
  title: string;
  content: string;
  summary?: string;
  publishedDate?: Date;
  view?: number;
  categoryId?: number;
  avatar?:string;
  relatedPosts?:IArticle[]
}
