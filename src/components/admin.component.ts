import { Component, OnInit } from '@angular/core';

import { Chore } from '../models';
import { AdminHeaderComponent } from './admin-header.component';
import { ChoreEditComponent } from './chore-edit.component';
import { ChoreEditStore } from '../stores';

@Component({
  selector: 'chore-admin',
  template: `<admin-header></admin-header><chore-edit [chore]="editChore"></chore-edit>`,
  directives: [ AdminHeaderComponent, ChoreEditComponent ]
})
export class AdminComponent implements OnInit {
  public editChore: Chore;

  constructor(private editStore: ChoreEditStore) {
    this.editStore.addListener(this.onChoreChanged.bind(this));
  }

  ngOnInit(): void {
    this.editChore = this.editStore.getState();
  }

  private onChoreChanged(): void {
    this.editChore = this.editStore.getState();
  }
}
