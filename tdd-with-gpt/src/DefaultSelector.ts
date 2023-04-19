import { Selector } from "./Selector";
import { Scenario } from "./Scenario";
import { HiProvider } from "./HiProvider";
import { Provider } from "./Provider";
import { Action } from "./Action";
import { ActionType } from "./ActionType";

export class DefaultSelector implements Selector {
  
  inspectAction(action: Action): Provider {
    // not used
    switch (action.payload) {
        case ActionType.INTERACT:
          return new HiProvider();
        default:
          throw new Error(`Provider for ${action.payload} not found.`);
      }
  }
}
