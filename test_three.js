import {task3} from "./three.js";
import {assert, assertArray} from "./assert.js";

export function test_3() {

    assert(task3.string, "");       //рядок пустий на початку
    try {
        for (let element of task3) {        //просто перебір пустого рядку

        }
    } catch (error) {
        console.log("Norm error:", error.message);
    }


    task3.string = "Hello world! How are you? Nice.";
    const elements = [];

    for (let element of task3) {
        elements.push(element);
    }
    assert(elements[0], 'H');
    assertArray( elements, Array.from(task3.string) );      //якщо не задавати параметр ітератора, то буде звичайний

    task3.iterator = "second";

    const seconds = []
    for (let element of task3) {
        seconds.push(element);
    }
    assert(seconds[0], 'H');
    assert(seconds[1], 'l');
    assertArray( seconds, Array.from(  'Hlowrd o r o?Nc.') );   //через літеру

    task3.iterator = "word";

    const words = []
    for (let element of task3) {
        words.push(element);
    }
    assert(words[0], 'Hello');
    assert(words[1], 'world');
    assertArray( words, ['Hello', 'world', 'How', 'are', 'you', 'Nice'] );

    task3.iterator = "sentence";

    const sentences = [];
    for (let element of task3) {
        sentences.push(element);
    }
    assert(sentences[0], "Hello world!");
    assert(sentences[2], "Nice.");
    assertArray( sentences, ["Hello world!", "How are you?", "Nice."] );

    task3.string = "I have bad news... I found the error! What is it? 404.";

    const sentences2 = [];
    for (let element of task3) {
        sentences2.push(element);
    }
    assert(sentences2[0], "I have bad news...");
    assert(sentences2[1], "I found the error!");
    assertArray( sentences2, ["I have bad news...", "I found the error!", "What is it?", "404."] );

    task3.iterator = "vowel";
    const vowels = [];
    for (let element of task3) {
        vowels.push(element);
    }
    assert(vowels[0], "I");
    assert(vowels[1], "a");
    assertArray( vowels, ['I', 'a', 'e', 'a', 'e', 'I', 'o', 'u', 'e', 'e', 'o', 'a', 'i', 'i'] );

    //рядок без кінцевого символу, з ним були проблеми
    task3.string = "word lalal words";
    task3.iterator = "word";
    const words2 = [];
    for (let el of task3 ) {
        words2.push(el);
    }
    assert(words2[0], "word");
    assert(words2[1], "lalal");
    assert(words2[2], "words");

    task3.iterator = "sentence";
    const sentences3 = [];
    for (let el of task3 ) {
        sentences3.push(el);
    }
    assert(sentences3[0], "word lalal words");
    assert(sentences3[1], undefined);

    try {
        task3.string = 3321;
        for (let el of task3) {

        }
    } catch (error) {
        console.log("Norm error:", error.message);
    }
}