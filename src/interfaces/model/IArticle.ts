import { $Enums } from "@prisma/client";

export default interface IArticle {
  id?: number;
  title: string;
  content: string;
  summary: string;
  publishedDate: Date;
  views: number;
  status: $Enums.ArticlesStatus;
  categoryId: number;
  authorId: number;
  avatar?: string;
}
export const InitalDataArticle: IArticle = {
  title: "",
  content: "",
  summary: "",
  publishedDate: new Date(),
  views: 0,
  status: "archived",
  categoryId: 1,
  authorId: 1,
  avatar: "",
};
