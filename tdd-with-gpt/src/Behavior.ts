import { Event } from './Event';
import { Action } from './Action';

export interface Behavior {
    listenEvent(event: Event): void ;
    getContext(): unknown;
    dispatchAction(action: Action): void;
  }