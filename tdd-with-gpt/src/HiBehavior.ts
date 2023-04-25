import { Behavior } from "./Behavior";
import { ActionType } from "./ActionType";
import { HiScenario } from "./HiScenario";
import { DefaultSelector } from "./DefaultSelector";
import * as vscode from 'vscode';
import { Action } from "./Action";
import { Event } from "./Event";

export default class HiBehavior implements Behavior {
  private context: vscode.ExtensionContext;

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
  }

  listenEvent(event: Event): void {
      if (event.name === 'hi'){
          const action = new Action(ActionType.INTERACT,new HiScenario());
          this.dispatchAction(action);
      }
  }

  getContext(): vscode.ExtensionContext {
    return this.context;
  }

  async dispatchAction(action: Action): Promise<void> {
    const provider = new DefaultSelector().inspectAction(action);
    //Missing interactions to select in DefaultSelection
    const diff = await provider.produceDiff(new HiScenario());
    vscode.window.showInformationMessage(JSON.stringify(diff));
  }
}
