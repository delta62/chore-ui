import { Injectable } from '@angular/core';
import { FluxDispatcher } from '../flux-dispatcher.service';
import { Payload } from './payload';

export const CHORE_EDIT_SET_TEXT: string = 'CHORE_EDIT_SET_TEXT';

@Injectable()
export class ChoreEditActions {

  constructor(private dispatcher: FluxDispatcher) { }

  setText(text: string): void {
    this.dispatcher.dispatch(<ChoreEditPayload>{ actionType: CHORE_EDIT_SET_TEXT, text });
  }
}

interface ChoreEditPayload extends Payload {
  text: string;
}
