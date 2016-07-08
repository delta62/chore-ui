import { Injectable } from '@angular/core';
import { invariant } from './invariant';
import { Payload } from './actions';

export type DispatchToken = string;
type ActionCallback = (payload: Payload) => void;

@Injectable()
export class FluxDispatcher {
  private callbacks: { [key: string]: ActionCallback };
  private isPending: { [key: string]: boolean };
  private isHandled: { [key: string]: boolean };
  private pendingPayload: Payload;
  private dispatching: boolean;
  private prefix: string;
  private lastId: number;

  constructor() {
    this.callbacks = { };
    this.isPending = { };
    this.isHandled = { };
    this.dispatching = false;
    this.prefix = 'ID_';
    this.lastId = 1;
  }

  register(callback: ActionCallback): DispatchToken {
    invariant(!this.dispatching, 'Dispatcher.register(...): Cannot register in the middle of a dispatch.');
    let id = this.prefix + this.lastId++;
    this.callbacks[id] = callback;
    return id;
  }

  unregister(id: DispatchToken): void {
    invariant(!this.dispatching, 'Dispatcher.unregister(...): Cannot unregister in the middle of a dispatch.');
    invariant(!!this.callbacks[id], `Dispatcher.unregister(...): '${id}' does not map to a registered callback.`);
    delete this.callbacks[id];
  }

  waitFor(ids: Array<DispatchToken>): void {

  }

  dispatch(payload: Payload): void {
    invariant(!this.dispatching, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.');
    this.startDispatching(payload);
    try {
      for (let id in this.callbacks) {
        if (this.isPending[id]) {
          continue;
        }
        this.invokeCallback(id);
      }
    }
    finally {
      this.stopDispatching();
    }
  }

  isDispatching(): boolean {
    return this.dispatching;
  }

  private startDispatching(payload: Payload): void {
    for (let id in this.callbacks) {
      this.isPending[id] = false;
      this.isHandled[id] = false;
    }
    this.pendingPayload = payload;
    this.dispatching = true;
  }

  private stopDispatching(): void {
    delete this.pendingPayload;
    this.dispatching = false;
  }

  private invokeCallback(id: DispatchToken): void {
    this.isPending[id] = true;
    this.callbacks[id](this.pendingPayload);
    this.isHandled[id] = true;
  }
}
