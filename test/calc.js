'use strict';

const { assert } = require('chai');
const calc = require('..');

suite('calc Tests', () => {
    test('Should add correctly', () => {
        assert.deepEqual(5, calc.add(3, 2));
    });

    test('Should subtract correctly', () => {
        assert.deepEqual(3, calc.subtract(8, 5));
    });

    // test('Should multiply correctly', () => {
    //     assert.deepEqual(27, calc.multiply(3, 9));
    // });
});