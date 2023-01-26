import {task4} from "./four.js";
import {assert, assertArray, assertObject} from "./assert.js";

export function test_4() {
    const map = new Map();
    assertObject(task4.map, map);
    task4.set(1, "one");
    map.set(1, "one");
    task4.set(true, "false");
    map.set(true, "false");
    task4.set("two", "two");
    map.set("two", "two");
    task4.set({lol: 2, wow: "ye"}, "one");
    map.set({lol: 2, wow: "ye"}, "one");
    assertObject( task4.map, Object.fromEntries(map) );           //роблю з map звичайний об'єкт для порівняння

    assert( task4.get(), map.get() );                   //undefined
    assert( task4.get(1), map.get(1) );
    assert( task4.get(true), map.get(true) );
    assert( task4.get("two"), map.get("two") );
    assert( task4.get( {lol: 2, wow: "ye"} ), map.get( {lol: 2, wow: "ye"} ) );

    assert( task4.has(1), map.has(1) );
    assert( task4.has(true), map.has(true) );
    assert( task4.has("wrong"), map.has("wrong") );
    assert( task4.has("two"), map.has("two") );
    assert( task4.has( {lol: 2, wow: "ye"} ), map.has( {lol: 2, wow: "ye"} ) );

    assert( task4.size(), map.size);

//    assertObject( task4.keys(), map.keys() );
//    тут видає помилку, бо map.keys() повертає ітератор (сказав, що можна без нього)
    assertArray( task4.keys(), Object.keys( Object.fromEntries(map) ) );
    assertArray( task4.values(), Object.values( Object.fromEntries(map) ) );
    assertArray( task4.entries(), Object.entries( Object.fromEntries(map) ) );


    task4.delete();     //нічого не видалить
    map.delete();
    task4.delete(1);
    map.delete(1);
    assertObject( task4.map, Object.fromEntries(map) );

    task4.clear();
    map.clear();
    assertObject( task4.map, Object.fromEntries(map) );

    assertArray( task4.keys(), Object.keys( Object.fromEntries(map) ) );
    assertArray( task4.values(), Object.values( Object.fromEntries(map) ) );
    assertArray( task4.entries(), Object.entries( Object.fromEntries(map) ) );

}