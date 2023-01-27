import {task6} from "./six.js";
import {assert} from "./assert.js";

export function test_6() {
    //так підказую
    assert(`${task6}`, "Kiev: -1;\n" +
        "Lviv: -4;\n" +
        "Dnipro: 0;\n" +
        "Odesa: +5.");
    assert(+task6, 0);
    task6["Rivne"] = -7;
    assert(`${task6}`, "Kiev: -1;\n" +
        "Lviv: -4;\n" +
        "Dnipro: 0;\n" +
        "Odesa: +5;\n" +
        "Rivne: -7.");

    assert(+task6, -1.4);

    //викине помилку
    try {
        for (let key in task6) {
            delete task6[key];
        }
        assert(+task6);
    } catch (error) {
        console.log("Norm error:", error.message);
    }

    try {
        task6.Kiev = undefined;
        console.log( +task6 );

    } catch (error) {
        console.log("Norm error:", error.message);
    }

    try {
        delete task6.Kiev;
        task6.Donbas = "many";
        console.log( `${task6}` );

    } catch (error) {
        console.log("Norm error:", error.message);
    }

    task6.Donbas = "+1";        //з рядками теж працює
    task6.Kiev = "-4";
    task6.Odesa = "0";
    task6.Herson = "5";

    assert(`${task6}`, "Donbas: +1;\n" +
        "Kiev: -4;\n" +
        "Odesa: 0;\n" +
        "Herson: +5.");        //плюсик додав
    assert(+task6, 0.5);

    try {
        task6.Donbas = -Infinity;
        console.log(+task6);
    } catch (error) {
        console.log("Norm error:", error.message);
    }

}