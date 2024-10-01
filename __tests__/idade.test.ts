import { describe, expect, test } from '@jest/globals';
import { isMenorDeIdade } from '../src/idade';

describe('idade module', () => {
    test('menor de idade', () => {
        expect(isMenorDeIdade(19)).toEqual(true);
    });
});