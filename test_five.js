import {task5} from "./five.js";
import {assert, assertArray, assertObject} from "./assert.js";

const student = {
    name: "Olexander",
    surname: "Maliy",
    course: 1,
    faculty: "FICE",
    security: {
        password: "1234",
        mail: "SM@gmail.com",
    },
    maths: 99,
    programming: 100,
    PE: 94,
    english: 89,
    ASD: 97,
    KDM: 97,
    ukrainian: 96,
}
const badStudent = {
    name: "John"
}

const badStudent2 = {
    name: "John",
    course:3,

    security: {             //цей з об'єктом всередині
        password: 321,
        mail: "@mail.com"
    }
}

const badStudent3 = {
    name: "Olexander",
    surname: "Maliy",
    course: 1,
    faculty: "FICE",
    security: {
        password: "1234",
        mail: "SM@gmail.com",
    },
    maths: 99,
    programming: "what?",
    ukrainian: 96,
}
export function test_5() {
    assert( task5.makeUsername("Stepan", "Brown"), "Stepan Brown" );
    assert( task5.makeUsername(), "undefined undefined");          // такого не буде, бо викине помилку перед цим

    assertArray( task5.takeMarks({PE: 98, maths: 89, english: 90, ASD: 87} ), [98, 89, 90, 87] );
    assertArray( task5.takeMarks({} ), [] );

    assert( task5.findAverage([98, 89, 90, 87]), 91);
    assert( task5.findAverage([]), 0 );

    assertObject(task5.makeStudent(student), {
        username: "Olexander Maliy",
        mail: "SM@gmail.com",
        average: 96,
        subjects: {
            maths: 99,
            programming: 100,
            PE: 94,
            english: 89,
            ASD: 97,
            KDM: 97,
            ukrainian: 96,
        }
    });

    assert( task5.averageByUsername("Olexander Maliy", "1234"), 96);

    //викине помилку під час тестування
    try {
        task5.makeStudent(badStudent);
    } catch (error) {
        console.log("Norm error:", error.message);
    }

    try {
        task5.makeStudent(badStudent2);
    } catch (error) {
        console.log("Norm error:", error.message);
    }

    try {
        task5.makeStudent(badStudent3);
    } catch (error) {
        console.log("Norm error:", error.message);
    }

    try {
        assert( task5.averageByUsername("Olexander Maliy", "1235"), 96);
    } catch (error) {
        console.log("Norm error:", error.message);
    }
}