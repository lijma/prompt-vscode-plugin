import * as assert from 'assert';
import { DefaultSelector } from '../../selector/DefaultSelector';

suite('DefaultSelector Tests', () => {
    test('Should choose HiProvider for hi scenario', () => {
        const defaultSelector = new DefaultSelector();
        const expectedProvider = defaultSelector.hiProvider;
        const scenario = {
            name: 'hi',
            payload: {}
        };
        const actualProvider = defaultSelector.defaultSelector(scenario);
        assert.strictEqual(actualProvider, expectedProvider);
    });
});

