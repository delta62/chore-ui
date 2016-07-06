import { invariant } from '../invariant';
import { FluxDispatcher } from '../flux-dispatcher.service';
import { FluxStore } from './flux-store';

export abstract class FluxReduceStore<T> extends FluxStore{
  private state: T;

  constructor(dispatcher: FluxDispatcher) {
    super(dispatcher);
    this.state = this.getInitialState();
  }

  getState(): T {
    return this.state;
  }

  abstract getInitialState(): T;

  abstract reduce(state: T, action: any): T;

  areEqual(x: T, y: T): boolean {
    return x === y;
  }

  protected invokeOnDispatch(action: any): void {
    this.changed = false;

    const startingState = this.state;
    const endingState = this.reduce(startingState, action);

    invariant(endingState !== undefined,
      `${this.constructor['name']} returned undefined from reduce(...), did you forget to return ` +
      'state in the default case? (use null if this was intentional)');

    if (!this.areEqual(startingState, endingState)) {
      this.state = endingState;
      this.emitChange();
    }

    if (this.changed) {
      this.emitter.emit(this.changeEvent);
    }
  }
}
