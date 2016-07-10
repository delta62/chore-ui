import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Task } from '../models';
import { TaskActions } from '../actions';
import { CheckboxComponent } from './checkbox.component';

@Component({
  selector: 'task-list-item',
  template: `{{ task.text }}<fa-checkbox [checked]="task.completed" (change)="onTaskChecked($event)"></fa-checkbox>`,
  directives: [ CheckboxComponent ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListItemComponent {
  @Input() task: Task;

  constructor(private taskActions: TaskActions) { }

  private onTaskChecked(val: boolean): void {
    this.taskActions.complete(this.task.choreText, this.task.text, val);
  }
}
