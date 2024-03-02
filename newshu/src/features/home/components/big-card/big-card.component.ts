/* 3rd party libraries */
import { Component, Input } from '@angular/core';
import { ArticleDto } from 'shared/interfaces';

/* globally accessible app code in every feature module */

/* locally accessible feature module code, always use relative path */

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {

  @Input()
  article!: ArticleDto;

}
