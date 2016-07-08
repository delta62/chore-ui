import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { Chore } from '../models';
import { ChoreStore, ChoreEditStore } from '../stores';
import { ChoreListItemComponent } from './chore-list-item.component';
import { ChoreEditComponent } from './chore-edit.component';
import { ChoreActions } from '../actions';
import { ListHeaderComponent } from './list-header.component';

@Component({
  selector: 'chore-app',
  template: `
    <chore-list-header></chore-list-header>
    <chore-list-item *ngFor="let chore of chores" [chore]="chore"></chore-list-item>
    <chore-edit [chore]="editChore"></chore-edit>`,
  directives: [ NgFor, ChoreListItemComponent, ChoreEditComponent, ListHeaderComponent ]
})
export class ChoreListComponent implements OnInit {
  public chores: Array<Chore>;
  public editChore: Chore;

  constructor(
    private choreStore: ChoreStore,
    private choreEditStore: ChoreEditStore,
    private choreActions: ChoreActions) {

    this.choreStore.addListener(this.onChoresChanged.bind(this));
    this.choreEditStore.addListener(this.onChoreEdited.bind(this));
  }

  ngOnInit(): void {
    this.chores = this.choreStore.getState();
    this.editChore = this.choreEditStore.getState();
  }

  private onChoresChanged(changeEvent: string): void {
    this.chores = this.choreStore.getState();
  }

  private onChoreEdited(changeEvent: string): void {
    this.editChore = this.choreEditStore.getState();
  }
}

