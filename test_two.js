import {task2} from "./two.js";
import {assert, assertArray} from "./assert.js";

export function test_2() {
    //пустий
    assertArray(task2.zoo, []);
    assert(task2.amountByName(), 0);
    assert(task2.amountByNameNorm(), 0);

    assert(task2.amountOfZoo(), 0);
    assert(task2.amountOfZooNorm(), 0);

    assertArray(task2.nameByAmount(), []);
    assertArray(task2.nameByAmountNorm(2), []);

    assert( task2.checkAnimal("wolf"), false);
    assert( task2.checkAnimalNorm("fox"), false);

    //дві тваринки
    task2.addAnimal("wolf");                //1
    task2.addAnimal("wolf", 2);     //+2
    task2.addAnimalNorm("fox");            //1
    task2.addAnimalNorm("fox");            //+1

    assert( task2.checkAnimal("wolf"), true);
    assert( task2.checkAnimalNorm("fox"), true);

    assert( task2.amountByName("wolf"), 3);
    assert( task2.amountByNameNorm("fox"), 2);

    assertArray( task2.nameByAmount(3), ["wolf"]);
    assertArray( task2.nameByAmountNorm(2), ["fox"]);

    assert (task2.amountOfZoo(), 5);
    assert( task2.amountOfZooNorm(), 5);
    assertArray(task2.zoo, [ { name: "wolf", amount: 3 }, { name: "fox", amount: 2 } ]);

    //більше тваринок
    task2.addAnimalNorm("bear", 44);
    task2.addAnimalNorm("castor", 44);

    assertArray( task2.nameByAmount(44), ["bear", "castor"]);       //castor - бобер :)
    assertArray( task2.nameByAmountNorm(44), ["bear", "castor"]);

    task2.addAnimalNorm("bear", 6);
    assertArray( task2.showAnimals(), ["wolf", "fox", "bear", "castor"]);
    assertArray( task2.showAnimalsNorm(), ["wolf", "fox", "bear", "castor"]);

    assertArray( task2.sortZoo(), [ {name: "fox", amount: 2}, {name: "wolf", amount: 3},
        {name: "castor", amount: 44}, {name: "bear", amount: 50} ]);
    assertArray( task2.sortZooNorm(), [ {name: "fox", amount: 2}, {name: "wolf", amount: 3},
        {name: "castor", amount: 44}, {name: "bear", amount: 50} ]);
    //порядок не змінився
    assertArray( task2.showAnimalsNorm(), ["wolf", "fox", "bear", "castor"]);
    task2.deleteAnimal();      //нічого не видалить
    task2.deleteAnimal("fox");
    task2.deleteAnimalNorm("bear");
    assertArray( task2.showAnimalsNorm(), ["wolf", "castor"] );

    //рядки як числа теж працюють
    task2.addAnimalNorm("fox", "4");
    task2.addAnimal("wolf", "4");   //+4
    assert( task2.amountByNameNorm("fox"), 4 );
    assert( task2.amountByName("wolf"), 7 );

    try {
        task2.addAnimalNorm("fox", "4fa");
    } catch (error) {
        console.log("Norm error: ", error.message);
    }

    try {
        task2.addAnimal("wolf", "fag");
    } catch (error) {
        console.log("Norm error: ", error.message);
    }
}