import { Component, Input, OnChanges } from '@angular/core';
import { NgFor } from '@angular/common';

import { Chore, Task } from '../models';
import { ChoreActions } from '../actions';
import { CheckboxComponent, CheckboxChangeEvent } from './checkbox.component';
import { TaskListItemComponent } from './task-list-item.component';

@Component({
  selector: 'chore-list-item',
  template: `
    {{ chore.text }}
    <fa-checkbox [checked]="chore.completed" (change)="onToggle($event)"></fa-checkbox>
    <task-list-item *ngFor="let task of taskList" [task]="task"></task-list-item>`,
  directives: [ NgFor, CheckboxComponent, TaskListItemComponent ]
})
export class ChoreListItemComponent implements OnChanges {
  @Input() chore: Chore;
  @Input() tasks: Iterator<Task>;

  constructor(private choreActions: ChoreActions) { }

  ngOnChanges(): void {
    console.log(this.tasks);
  }

  private onToggle(event: CheckboxChangeEvent): void {
    this.choreActions.toggleCompleted(this.chore.text, event.value);
  }
}

