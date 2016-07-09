import { Injectable } from '@angular/core';

import { FluxDispatcher } from '../flux-dispatcher.service';
import { Payload } from './payload';

export const CHORE_COMPLETE: string = 'CHORE_COMPLETE';
export const CHORE_CREATE: string = 'CHORE_CREATE';

@Injectable()
export class ChoreActions {

  constructor(private dispatcher: FluxDispatcher) { }

  toggleCompleted(text: string, completed: boolean): void {
    this.dispatcher.dispatch(<ChoreCompletedPayload>{
      actionType: CHORE_COMPLETE,
      text,
      completed
    });
  }

  create(text: string): void {
    this.dispatcher.dispatch(<ChorePayload>{
      actionType: CHORE_CREATE,
      text
    });
  }
}

export interface ChorePayload extends Payload {
  text: string;
}

export interface ChoreCompletedPayload extends ChorePayload {
  completed: boolean;
}
