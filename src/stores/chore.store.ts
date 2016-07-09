import { Injectable } from '@angular/core';
import { Map } from 'immutable';

import { Task, Chore } from '../models';
import { FluxDispatcher } from '../flux-dispatcher.service';
import { FluxReduceStore } from './flux-reduce-store';
import { ChorePayload, ChoreCompletedPayload, CHORE_COMPLETE, CHORE_CREATE } from '../actions';

@Injectable()
export class ChoreStore extends FluxReduceStore<Map<string, Chore>> {

  constructor(dispatcher: FluxDispatcher) {
    super(dispatcher);
  }

  getInitialState(): Map<string, Chore> {
    return Map.of(
      'Watch TB',
      {
        text: 'Watch TB',
        completed: false
      }
    );
  }

  reduce(state: Map<string, Chore>, payload: ChorePayload): Map<string, Chore> {
    switch (payload.actionType) {
      case CHORE_CREATE:
        return state.set(payload.text, {
          text: payload.text,
          completed: false
        });
      case CHORE_COMPLETE:
        return state.update(payload.text, (chore) => ({
          text: chore.text,
          completed: (<ChoreCompletedPayload>payload).completed
        }))
      default:
        return state;
    }
  }
}
