import { Event } from './Event';
import { Action } from './Action';

export interface Behavior {
    listenEvent(): Event;
    getContext(): unknown;
    dispatchAction(action: Action): void;
  }