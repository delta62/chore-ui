import { EventEmitter } from '@angular/core';

import { FluxDispatcher, DispatchToken } from '../flux-dispatcher.service';
import { invariant } from '../invariant';

export abstract class FluxStore {
  private dispatchToken: DispatchToken;

  protected changed: boolean;
  protected changeEvent: string;
  protected emitter: EventEmitter<string>;
  protected className: string;

  constructor(private dispatcher: FluxDispatcher) {
    this.className = this.constructor['name'];
    this.changed = false;
    this.changeEvent = 'change';
    this.emitter = new EventEmitter<string>();

    this.dispatchToken = dispatcher.register((payload: any) => {
      this.invokeOnDispatch(payload);
    });
  }

  addListener(callback: (eventType?: string) => void): { remove: () => void } {
    return this.emitter.subscribe(callback);
  }

  getDispatcher(): FluxDispatcher {
    return this.dispatcher;
  }

  hasChanged(): boolean {
    invariant(this.dispatcher.isDispatching(), `${this.className}.hasChanged(): Must be invoked while dispatching.`);
    return this.changed;
  }

  protected emitChange(): void {
    invariant(this.dispatcher.isDispatching(), `${this.className}.__emitChange(): Must be invoked while dispatching.`);
    this.changed = true;
  }

  protected invokeOnDispatch(payload: any): void {
    this.changed = false;
    this.onDispatch(payload);
    if (this.changed) {
      this.emitter.emit(this.changeEvent);
    }
  }

  protected abstract onDispatch(payload: any): void;
}
