/* 3rd party libraries */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

/* globally accessible app code in every feature module */
import { TopHeadlineCriteria } from 'features/home';

/* locally accessible feature module code, always use relative path */


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  model = new TopHeadlineCriteria({});
  formGroup: FormGroup;

  constructor(
    formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group(this.model);

    console.log(this.formGroup.value)
  }

  test() {
    console.log(this.formGroup.value);
  }

}
