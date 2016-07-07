import { Component } from '@angular/core';

import { ChoreActions } from '../actions';
import { ChoreNameStore, ChoreTaskStore } from '../stores';

@Component({
  selector: 'chore-edit',
  template: `
    <input #name type="text">
    <input type="text">
    <button type="button" (click)="onSubmit(name.value)">Do</button>`
})
export class ChoreEditComponent {

  constructor(
    private choreActions: ChoreActions,
    private choreNameStore: ChoreNameStore,
    private choreTaskStore: ChoreTaskStore) { }

  onSubmit(text: string): void {
    this.choreActions.create(text);
  }
}
