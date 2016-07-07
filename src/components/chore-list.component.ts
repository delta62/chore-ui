import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { Chore } from '../models';
import { ChoreStore } from '../stores';
import { ChoreListItemComponent } from './chore-list-item.component';
import { ChoreEditComponent } from './chore-edit.component';
import { ChoreActions } from '../actions';
import { ListHeaderComponent } from './list-header.component';

@Component({
  selector: 'chore-app',
  template: `
    <chore-list-header></chore-list-header>
    <chore-list-item *ngFor="let chore of chores" [chore]="chore"></chore-list-item>
    <chore-edit></chore-edit>`,
  directives: [ NgFor, ChoreListItemComponent, ChoreEditComponent, ListHeaderComponent ]
})
export class ChoreListComponent implements OnInit {
  public chores: Array<Chore>;

  constructor(private choreStore: ChoreStore, private choreActions: ChoreActions) {
    this.choreStore.addListener(this.onChoresChanged.bind(this));
  }

  ngOnInit(): void {
    this.chores = this.choreStore.getState();
  }

  private onChoresChanged(changeEvent: string): void {
    this.chores = this.choreStore.getState();
  }
}

