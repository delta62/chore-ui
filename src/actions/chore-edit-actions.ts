import { Injectable } from '@angular/core';
import { FluxDispatcher } from '../flux-dispatcher.service';

export const CHORE_EDIT_ADD_TASK: string = 'CHORE_EDIT_ADD_TASK';
export const CHORE_EDIT_SET_TEXT: string = 'CHORE_EDIT_SET_TEXT';

@Injectable()
export class ChoreEditActions {

  constructor(private dispatcher: FluxDispatcher) { }

  addTask(text: string): void {
    this.dispatcher.dispatch({ actionType: CHORE_EDIT_ADD_TASK, text });
  }

  setText(text: string): void {
    this.dispatcher.dispatch({ actionType: CHORE_EDIT_SET_TEXT, text });
  }
}
