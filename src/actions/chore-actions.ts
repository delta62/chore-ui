import { Injectable } from '@angular/core';

import { FluxDispatcher } from '../flux-dispatcher.service';

const CHORE_COMPLETED: string = 'CHORE_COMPLETED';
const CHORE_CREATED: string = 'CHORE_CREATED';

@Injectable()
export class ChoreActions {

  constructor(private dispatcher: FluxDispatcher) { }

  toggleCompleted(text: string, completed: boolean): void {
    this.dispatcher.dispatch({ actionType: CHORE_COMPLETED, text, completed });
  }

  create(text: string): void {
    this.dispatcher.dispatch({ actionType: CHORE_CREATED, text });
  }
}
