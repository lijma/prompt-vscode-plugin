import * as assert from 'assert';
import { GptPromptService } from '../../service/GptPromptService';

suite('GptPromptService Tests', () => {
    test('Should return hi gpt for prompt hi', async () => {
        const gptPromptService = new GptPromptService();
        const expectedResponse = 'hi gpt';
        const actualResponse = await gptPromptService.callGptPrompt('hi');
        assert.strictEqual(actualResponse, expectedResponse);
    });
});