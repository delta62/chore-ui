import { Component, Input } from '@angular/core';

import { Task } from '../models';
import { CheckboxComponent } from './checkbox.component';

@Component({
  selector: 'task-list-item',
  template: `{{ task.text }}<fa-checkbox [checked]="task.completed"></fa-checkbox>`,
  directives: [ CheckboxComponent ]
})
export class TaskListItemComponent {
  @Input() task: Task;
}
