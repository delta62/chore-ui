import { Component, Input } from '@angular/core';

import { Chore } from './chore';
import { ChoreActions } from './actions/chore-actions';

@Component({
  selector: 'chore-list-item',
  template: `<div class="chore">
    {{ chore.text }}
    <input #completed type="checkbox" [checked]="chore.completed" (change)="onToggle(completed.checked)" />`
})
export class ChoreListItemComponent {
  @Input() public chore: Chore;

  constructor(private choreActions: ChoreActions) { }

  onToggle(enabled: boolean): void {
    this.choreActions.toggleCompleted(this.chore.id, enabled);
  }
}

