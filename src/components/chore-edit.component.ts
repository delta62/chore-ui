import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

import { Chore } from '../models';
import { ChoreEditActions } from '../actions';

@Component({
  selector: 'chore-edit',
  template: `
    <label>Chore</label>
    <input #name type="text" [value]="chore.text" (change)="onTextChanged(name.value)">
    <br>
    <button type="button" (click)="onSubmit()">Create</button>`,
  directives: [ NgFor ]
})
export class ChoreEditComponent {
  @Input() chore: Chore;

  constructor(private choreEditActions: ChoreEditActions) { }

  onTextChanged(text: string): void {
    this.choreEditActions.setText(text);
  }

  onSubmit(text: string): void {
    console.log('submit');
  }
}
