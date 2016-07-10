import { Injectable } from '@angular/core';
import { Map, List } from 'immutable';

import { FluxDispatcher } from '../flux-dispatcher.service';
import { FluxReduceStore } from './flux-reduce-store';
import { Task } from '../models';
import { Payload, TaskPayload, TaskCompletePayload, TaskActions, TASK_CREATE, TASK_COMPLETE } from '../actions';

type ChoreTaskHash = Map<string, Map<string, Task>>;

@Injectable()
export class TaskStore extends FluxReduceStore<ChoreTaskHash> {
  constructor(dispatcher: FluxDispatcher) {
    super(dispatcher);
  }

  getInitialState(): ChoreTaskHash {
    // return Map<string, Map<string, Task>>();
    let choreText = 'Watch TB';
    let task = 'TV';
    let tasks = Map.of(task, { choreText, text: task, completed: false }, 'foo', { choreText, text: 'foo', completed: true });

    return Map.of(choreText, tasks);
  }

  reduce(state: ChoreTaskHash, payload: Payload): ChoreTaskHash {
    switch (payload.actionType) {
      case TASK_CREATE:
        return this.create(state, <TaskPayload>payload);
      case TASK_COMPLETE:
        return this.toggleCompleted(state, <TaskCompletePayload>payload);
      default:
        return state;
    }
  }

  private create(state: ChoreTaskHash, pl: TaskPayload): ChoreTaskHash {
    let newTask = { text: pl.taskText, completed: false };
    return state.setIn([ pl.choreText, pl.taskText ], newTask);
  }

  private toggleCompleted(state: ChoreTaskHash, pl: TaskCompletePayload): ChoreTaskHash {
    return state.updateIn([ pl.choreText, pl.taskText ], (task: Task) => ({
      choreText: task.choreText,
      text: task.text,
      completed: pl.completed
    }));
  }
}
