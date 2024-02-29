import { ArticleDto, ResultDto } from "shared/interfaces";

export interface EverythingResult extends ResultDto {
  articles: ArticleDto[];
}