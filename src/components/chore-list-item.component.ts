import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgFor } from '@angular/common';
import { List } from 'immutable';

import { Chore, Task } from '../models';
import { ChoreActions } from '../actions';
import { CheckboxComponent } from './checkbox.component';
import { TaskListItemComponent } from './task-list-item.component';

@Component({
  selector: 'chore-list-item',
  template: `
    {{ chore.text }}
    <fa-checkbox [checked]="chore.completed" (change)="onToggle($event)"></fa-checkbox>
    <task-list-item *ngFor="let task of tasks" [task]="task"></task-list-item>`,
  directives: [ NgFor, CheckboxComponent, TaskListItemComponent ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChoreListItemComponent {
  @Input() chore: Chore;
  @Input() tasks: List<Task>;

  constructor(private choreActions: ChoreActions) { }

  private onToggle(val: boolean): void {
    this.choreActions.toggleCompleted(this.chore.text, val);
  }
}
