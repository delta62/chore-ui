import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

import { Chore } from '../models';
import { ChoreEditActions } from '../actions';

@Component({
  selector: 'chore-edit',
  template: `
    <label>Chore</label>
    <input #name type="text" [value]="chore.text" (change)="onTextChanged(name.value)">
    <ul>
      <li *ngFor="let task of chore.tasks">{{ task }}</li>
    </ul>
    <input #task type="text">
    <button type="button" (click)="onAddTask(task.value)">Add</button>
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

  onAddTask(text: string): void {
    this.choreEditActions.addTask(text);
  }

  onSubmit(text: string): void {
    console.log('submit');
  }
}
