import { Injectable } from '@angular/core';
import { Payload } from '../actions';
import { Chore } from '../models';
import { FluxReduceStore } from './flux-reduce-store';
import { FluxDispatcher } from '../flux-dispatcher.service';

import { CHORE_EDIT_ADD_TASK, CHORE_EDIT_SET_TEXT } from '../actions/chore-edit-actions';

@Injectable()
export class ChoreEditStore extends FluxReduceStore<Chore> {

  constructor(dispatcher: FluxDispatcher) {
    super(dispatcher);
  }

  getInitialState(): Chore {
    return {
      text: '',
      completed: false,
      tasks: [ ]
    };
  }

  reduce(state: Chore, payload: Payload): Chore {
    switch (payload.actionType) {
      case CHORE_EDIT_ADD_TASK:
        let tasks = state.tasks.slice();
        tasks.push(payload['text']);
        return {
          text: state.text,
          completed: state.completed,
          tasks
        };
      case CHORE_EDIT_SET_TEXT:
        return {
          text: payload['text'],
          completed: state.completed,
          tasks: state.tasks
        };
      default:
        return state;
    }
  }
}
