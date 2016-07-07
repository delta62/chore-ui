import { Injectable } from '@angular/core';

import { Chore } from '../models';
import { FluxDispatcher } from '../flux-dispatcher.service';
import { FluxReduceStore } from './flux-reduce-store';

@Injectable()
export class ChoreStore extends FluxReduceStore<Array<Chore>> {

  constructor(dispatcher: FluxDispatcher) {
    super(dispatcher);
  }

  getInitialState(): Array<Chore> {
    return [
      { id: '1', text: 'Watch TV', completed: false },
      { id: '2', text: 'Laundry', completed: false }
    ];
  }

  reduce(chores: Array<Chore>, action: any): Array<Chore> {
    switch (action.actionType) {
      case 'CHORE_CREATED':
        let arr = chores.slice();
        arr.push({
          id: 'foobar',
          text: action.text,
          completed: false
        })
        return arr;
      case 'CHORE_COMPLETED':
        return chores.map((val: Chore) => ({
          id: val.id,
          text: val.text,
          completed: val.id === action.id ? action.completed : val.completed
        }));
      default:
        return chores;
    }
  }
}
