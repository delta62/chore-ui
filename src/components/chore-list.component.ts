import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { Chore } from '../models';
import { ChoreStore } from '../stores';
import { ChoreListItemComponent } from './chore-list-item.component';
import { ListHeaderComponent } from './list-header.component';

@Component({
  selector: 'chore-app',
  template: `
    <chore-list-header></chore-list-header>
    <chore-list-item *ngFor="let chore of chores" [chore]="chore"></chore-list-item>`,
  directives: [ NgFor, ChoreListItemComponent, ListHeaderComponent ]
})
export class ChoreListComponent implements OnInit {
  public chores: Array<Chore>;

  constructor(private choreStore: ChoreStore) {
    this.choreStore.addListener(this.onChoresChanged.bind(this));
  }

  ngOnInit(): void {
    this.chores = this.choreStore.getState();
  }

  private onChoresChanged(changeEvent: string): void {
    this.chores = this.choreStore.getState();
  }
}

