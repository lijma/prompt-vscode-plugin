import * as assert from 'assert';
import * as vscode from 'vscode';
import { HiBehavior } from '../../behavior/HiBehavior';

suite('HiBehavior Tests', () => {
    test('Should dispatch hi scenario to default selector', async () => {
        const hiBehavior = new HiBehavior();
        const spyDefaultSelector = sinon.spy(hiBehavior.selector, 'defaultSelector');
        const expectedScenario = {
            name: 'hi',
            payload: {}
        };
        await vscode.commands.executeCommand('tdd-with-gpt.hi');
        sinon.assert.calledWith(spyDefaultSelector, expectedScenario);
    });
});
