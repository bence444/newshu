import { ArticleDto, ResultDto } from "shared/interfaces";

export interface TopHeadlineResult extends ResultDto {
  articles: ArticleDto[];
}