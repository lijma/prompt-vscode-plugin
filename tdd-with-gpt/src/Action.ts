import { ActionType } from './ActionType';

export class Action {
    constructor(public readonly type: ActionType, public readonly payload: unknown) {}

  }
  