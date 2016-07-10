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
    let task = 'TV';
    let tasks = Map.of(task, { text: task, completed: false }, 'foo', { text: 'foo', completed: true });

    return Map.of('Watch TB', tasks);
  }

  getChoreTasks(choreText: string): Map<string, Task> {
    return this.state.get(choreText, Map<string, Task>());
  }

  reduce(state: ChoreTaskHash, payload: TaskPayload): ChoreTaskHash {
    switch (payload.actionType) {
      case TASK_CREATE:
        let newTask = { text: payload.taskText, completed: false };
        return state.setIn([ payload.choreText, payload.taskText ], newTask);
      case TASK_COMPLETE:
        return state.updateIn([ payload.choreText, payload.taskText ], (task) => ({
          textTask: task.textTask,
          completed: (<TaskCompletePayload>payload).completed
        }));
      default:
        return state;
    }
  }
}
