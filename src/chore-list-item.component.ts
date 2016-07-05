import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'chore-list-item',
  template: `<div class="chore">{{ chore.text }}<span *ngIf="!chore.completed"></span></div>`,
  directives: [ NgIf ]
})
export class ChoreListItemComponent {
  @Input() public chore: Chore;
}

