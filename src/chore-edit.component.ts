import { Component } from '@angular/core';

import { ChoreActions } from './actions/chore-actions';

@Component({
  selector: 'chore-edit',
  template: `<input #name type="text" /><button type="button" (click)="onSubmit(name.value)">Do</button>`
})
export class ChoreEditComponent {

  constructor(private choreActions: ChoreActions) { }

  onSubmit(text: string): void {
    this.choreActions.create(text);
  }
}
