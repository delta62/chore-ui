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
      { text: 'Watch TV', completed: false, tasks: [ ] },
      { text: 'Laundry', completed: false, tasks: [ ] }
    ];
  }

  reduce(chores: Array<Chore>, action: any): Array<Chore> {
    switch (action.actionType) {
      case 'CHORE_CREATED':
        let arr = chores.slice();
        arr.push({
          text: action.text,
          completed: false,
          tasks: [ ]
        })
        return arr;
      case 'CHORE_COMPLETED':
        return chores.map((val: Chore) => ({
          text: val.text,
          completed: val.text === action.text ? action.completed : val.completed,
          tasks: val.tasks
        }));
      default:
        return chores;
    }
  }
}
