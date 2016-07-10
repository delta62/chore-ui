import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Iterable, List } from 'immutable';

import { Chore, Task } from '../models';
import { ChoreStore, TaskStore } from '../stores';
import { ChoreListItemComponent } from './chore-list-item.component';
import { ListHeaderComponent } from './list-header.component';

@Component({
  selector: 'chore-app',
  template: `
    <chore-list-header></chore-list-header>
    <chore-list-item *ngFor="let chore of chores" [chore]="chore" [tasks]="tasks.get(chore.text)"></chore-list-item>`,
  directives: [ NgFor, ChoreListItemComponent, ListHeaderComponent ]
})
export class ChoreListComponent implements OnInit {
  private chores: List<Chore>;
  private tasks: Iterable<string, List<Task>>;

  constructor(private choreStore: ChoreStore, private taskStore: TaskStore) {
    this.choreStore.addListener(this.onChoresChanged.bind(this));
    this.taskStore.addListener(this.onTasksChanged.bind(this));
  }

  ngOnInit(): void {
    this.onChoresChanged();
    this.onTasksChanged();
  }

  private onChoresChanged(): void {
    this.chores = this.choreStore.getState().toList();
  }

  private onTasksChanged(): void {
    this.tasks = this.taskStore
      .getState()
      .map(val => val.toList());
  }
}
