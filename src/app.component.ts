import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { Chore } from './chore';
import { ChoreStoreService } from './stores/chore-store.service';
import { ChoreListItemComponent } from './chore-list-item.component';
import { ChoreEditComponent } from './chore-edit.component';
import { ChoreActions } from './actions/chore-actions';

@Component({
  selector: 'chore-app',
  template: `<header>Todo</header>
    <chore-list-item *ngFor="let chore of chores" [chore]="chore"></chore-list-item>
    <chore-edit></chore-edit>`,
  directives: [ NgFor, ChoreListItemComponent, ChoreEditComponent ]
})
export class AppComponent implements OnInit {
  public chores: Array<Chore>;

  constructor(private choreStore: ChoreStoreService, private choreActions: ChoreActions) {
    this.choreStore.addListener(this.onChoresChanged.bind(this));
  }

  ngOnInit(): void {
    this.chores = this.choreStore.getState();
  }

  private onChoresChanged(changeEvent: string): void {
    this.chores = this.choreStore.getState();
  }
}
