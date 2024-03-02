/* 3rd party libraries */
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActionCallData } from 'core/interfaces';

/* globally accessible app code in every feature module */

/* locally accessible feature module code, always use relative path */
import { TopHeadlineCriteria, HomeAction } from '../../models';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  model = new TopHeadlineCriteria({});
  formGroup: FormGroup;

  @Output()
  actionCall = new EventEmitter<ActionCallData>();

  constructor(
    formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group(this.model);
  }

  clickSearch() {
    this.actionCall.emit({
      action: HomeAction.Filter,
      data: this.formGroup.value
    });
  }

}
