import { Injectable } from '@angular/core';
import { FluxReduceStore } from './flux-reduce-store';

@Injectable()
export class ChoreTaskStore extends FluxReduceStore<Array<string>> {
  getInitialState(): Array<string> {
    return [ ];
  }

  reduce(state: Array<string>, payload: any): Array<string> {
    return state;
  }
}
