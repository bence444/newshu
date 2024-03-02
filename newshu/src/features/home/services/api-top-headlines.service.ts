/* 3rd party libraries */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/* globally accessible app code in every feature module */
import { environment } from 'env/environment';
import { HttpBaseService } from 'shared/base';
import { SearchDto } from 'shared/interfaces';

/* locally accessible feature module code, always use relative path */
import { TopHeadlineResult } from '../interfaces';
import { TopHeadlineCriteria } from '../models';


@Injectable({
  providedIn: 'root'
})
export class ApiTopHeadlinesService extends HttpBaseService {

  constructor(
    private readonly http: HttpClient
  ) {
    super(environment.apiRoot, 'top-headlines');
  }

  filter(dto: SearchDto, data: TopHeadlineCriteria): Observable<TopHeadlineResult> {
    let link = `${this.apiUrl}?country=hu&page=${dto.page}&pageSize=${dto.pageSize}`;

    if (data.q !== null && data.q !== '') {
      link += `&q=${data.q}`;
    }

    return this.http.get<TopHeadlineResult>(link);
  }
}
