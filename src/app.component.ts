import { Chore } from './chore';
import { ChoreListItemComponent } from './chore-list-item.component';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'chore-app',
  template: `<header>Todo</header>
    <chore-list-item *ngFor="let chore of chores" [chore]="chore"></chore-list-item>`,
  directives: [ NgFor, ChoreListItemComponent ]
})
export class AppComponent {
  public chores: Array<Chore>= [ { text: 'Watch TV', completed: true }, { text: 'Laundry', completed: false } ];
}
