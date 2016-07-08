import { Component, Input } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';

import { Chore } from '../models';
import { ChoreActions } from '../actions';
import { CheckboxComponent, CheckboxChangeEvent } from './checkbox.component';

@Component({
  selector: 'chore-list-item',
  template: `
    {{ chore.text }}
    <fa-checkbox [checked]="chore.completed" (change)="onToggle($event)"></fa-checkbox>
    <ol *ngIf="chore.tasks.length">
      <li *ngFor="let task of chore.tasks">
        {{ task.text }}
        <fa-checkbox [checked]="task.completed" (change)="onTaskToggle(task.text, $event)"></fa-checkbox>
      </li>
    </ol>`,
  directives: [ NgFor, NgIf, NgClass, CheckboxComponent ]
})
export class ChoreListItemComponent {
  @Input() public chore: Chore;

  constructor(private choreActions: ChoreActions) { }

  private onToggle(event: CheckboxChangeEvent): void {
    this.choreActions.toggleCompleted(this.chore.text, event.value);
  }

  private onTaskToggle(text: string, event: CheckboxChangeEvent): void {
    this.choreActions.toggleTask(text, event.value);
  }
}

