import { Behavior } from "./Behavior";
import { ActionType } from "./ActionType";
import { Scenario } from "./Scenario";
import { Provider } from "./Provider";
import * as vscode from 'vscode';

export class HiBehavior implements Behavior {
  private context: vscode.ExtensionContext;

  constructor(context: vscode.ExtensionContext) {
    this.context = context;
  }

  listenEvent(): vscode.Event<vscode.TextDocument> {
    return vscode.commands.registerTextEditorCommand('tdd-with-gpt.hi', async () => {
      const scenario = {
        name: ActionType.INTERACT,
        payload: Scenario
      };
      const provider = new DefaultSelector().selectProvider(scenario);
      const diff = await provider.produceDiff(scenario);
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        await editor.edit(editBuilder => {
          editBuilder.insert(new vscode.Position(0, 0), JSON.stringify(diff));
        });
      }
    });
  }

  getContext(): vscode.ExtensionContext {
    return this.context;
  }

  dispatchAction(): void {
    // not used
  }
}
