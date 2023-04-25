import { Action } from "./Action";
import { Provider } from "./Provider";

export interface Selector {
    inspectAction(action: Action): Provider;
  }
  