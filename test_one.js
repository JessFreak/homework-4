import {task1} from "./one.js";
import {assertObject, assertArray} from "./assert.js"
export function test_1() {
    assertObject(task1, { id1: 1, id2: 2, [Symbol("id")]: 321, [Symbol("id")]: 31 } );
    assertArray(Object.keys(task1), ["id1", "id2"] );       //Object.keys() ігнорує символьні ключі, як і перебір for...in
}