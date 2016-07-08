import { Injectable } from '@angular/core';
import { FluxReduceStore } from './flux-reduce-store';
import { FluxDispatcher } from '../flux-dispatcher.service';

const CHORE_TASK_ADDED: string = 'CHORE_TASK_ADDED';

@Injectable()
export class ChoreTaskStore extends FluxReduceStore<Array<string>> {
  constructor(dispatcher: FluxDispatcher) {
    super(dispatcher);
  }

  getInitialState(): Array<string> {
    return [ ];
  }

  reduce(state: Array<string>, payload: any): Array<string> {
    switch (payload.actionName) {
      case CHORE_TASK_ADDED:
        let newState = state.slice();
        newState.push(payload.text);
        return newState;
    }
    return state;
  }
}
