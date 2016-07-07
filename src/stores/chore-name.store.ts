import { Injectable } from '@angular/core';
import { FluxReduceStore } from './flux-reduce-store';

const CHORE_NAME_CHANGE: string = 'CHORE_NAME_CHANGE';

@Injectable()
export class ChoreNameStore extends FluxReduceStore<string> {
  getInitialState(): string {
    return '';
  }

  reduce(state: string, action: any): string {
    switch (action.actionType) {
      case CHORE_NAME_CHANGE:
        return action.text;
    }
    return state;
  }
}
