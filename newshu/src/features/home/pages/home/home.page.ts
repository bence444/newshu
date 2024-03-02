/* 3rd party libraries */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

/* globally accessible app code in every feature module */
import { ActionCallData } from 'core/interfaces';
import { SearchDto } from 'shared/interfaces';

/* locally accessible feature module code, always use relative path */
import { HomeAction, TopHeadlineCriteria } from '../../models';
import { ApiTopHeadlinesService } from '../../services';
import { TopHeadlineResult } from '../../interfaces';
import { LayoutService } from 'core/services';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage implements OnInit {

  topHeadlines$?: Observable<TopHeadlineResult>;

  isMobile$ = this.layout.isMobile$;

  search: SearchDto = {
    page: 0,
    pageSize: 20
  };

  model = new TopHeadlineCriteria({});

  constructor(
    private readonly api: ApiTopHeadlinesService,
    private readonly layout: LayoutService
  ) { }

  ngOnInit(): void {
    //this.filter();
  }

  filter(resetPaginator?: boolean) {
    if (resetPaginator === true) {
      this.search.page = 0;
    }

    this.topHeadlines$ = this.api.filter(this.search, this.model);
  }  

  execute(actionCall: ActionCallData) {
    if (actionCall.action === HomeAction.Filter) {
      this.model = actionCall.data as TopHeadlineCriteria;
      this.filter();
    }
  }

  change(event: PageEvent) {
    let update = false;

    this.search.page = event.pageIndex;

    if (event.pageSize !== this.search.pageSize) {
      this.search.page = 0;
      this.search.pageSize = event.pageSize;
      
      update = true;
    }

    this.filter(update);
  }

}
