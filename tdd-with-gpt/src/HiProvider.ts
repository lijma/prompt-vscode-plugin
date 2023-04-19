import { Provider } from "./Provider";
import { Scenario } from "./Scenario";
import { Diff } from "./Diff";
import { GptPromptService } from "./GptPromptService";

export class HiProvider implements Provider {
  async produceDiff(scenario: Scenario): Promise<Diff> {
    const gptPromptService = new GptPromptService();
    const response = await gptPromptService.callChatGPT(scenario.payload.prompt);
    return {
      json: response.data.choices[0].text
    };
  }
}
