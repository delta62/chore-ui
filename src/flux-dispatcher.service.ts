import { Injectable } from '@angular/core';
import { invariant } from './invariant';

export type DispatchToken = string;
type Callback = (payload: any) => void;

@Injectable()
export class FluxDispatcher {
  private callbacks: { [key: string]: Callback };
  private isPending: { [key: string]: boolean };
  private isHandled: { [key: string]: boolean };
  private pendingPayload: any;
  private dispatching: boolean;
  private prefix: string;
  private lastId: number;

  constructor() {
    this.callbacks = { };
    this.dispatching = false;
    this.prefix = 'ID_';
    this.lastId = 1;
  }

  register(callback: Callback): DispatchToken {
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

  dispatch(payload: any): void {
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

  private startDispatching(payload: any): void {
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
