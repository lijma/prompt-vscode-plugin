import * as assert from 'assert';
import { HiProvider } from '../../provider/HiProvider';
import { GptPromptService } from '../../service/GptPromptService';

suite('HiProvider Tests', () => {
    test('Should call GptPromptService to get hi gpt', async () => {
        const hiProvider = new HiProvider();
        const spyGptPromptService = sinon.spy(hiProvider.gptPromptService, 'callGptPrompt');
        const expectedPrompt = 'hi gpt';
        await hiProvider.produceDiff({
            name: 'hi',
            payload: {}
        });
        sinon.assert.calledOnce(spyGptPromptService);
        sinon.assert.calledWith(spyGptPromptService, 'hi');
        const actualPrompt = hiProvider.diff.json as string;
        assert.strictEqual(actualPrompt, expectedPrompt);
    });
});

