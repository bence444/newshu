export class TopHeadlineCriteria {

  // note: replace with enum for multilanguage
  get country(): string { return 'hu'; }

  public category?: string;

  public sources?: string[];

}
