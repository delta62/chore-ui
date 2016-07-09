import { Injectable } from '@angular/core';
import { FluxDispatcher } from '../flux-dispatcher.service';
import { Payload } from './payload';

export const TASK_CREATE: string = 'TASK_CREATE';
export const TASK_COMPLETE: string = 'TASK_COMPLETE';

@Injectable()
export class TaskActions {

  constructor(private dispatcher: FluxDispatcher) { }

  create(choreText: string, taskText: string): void {
    this.dispatcher.dispatch(<TaskPayload>{
      actionType: TASK_CREATE,
      choreText,
      taskText
    });
  }

  complete(choreText: string, taskText: string, completed: boolean): void {
    this.dispatcher.dispatch(<TaskCompletePayload>{
      actionType: TASK_COMPLETE,
      choreText,
      taskText,
      completed
    });
  }
}

export interface TaskPayload extends Payload {
  choreText: string;
  taskText: string;
}

export interface TaskCompletePayload extends TaskPayload {
  completed: boolean;
}
