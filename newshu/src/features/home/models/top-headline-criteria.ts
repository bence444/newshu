export class TopHeadlineCriteria {

  public readonly country: string = 'hu';

  public q: string = '';

  public category?: string;

  public sources?: string[];

  constructor(data: object) {
    Object.assign(this, data);
  }

}
