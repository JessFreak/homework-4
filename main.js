import {test_1} from "./test_one.js";
import {test_2} from "./test_two.js";
import {test_3} from "./test_three.js";
import {test_4} from "./test_four.js";
import {test_5} from "./test_five.js";
import {test_6} from "./test_six.js";

try {
    console.log("Task #1");
    test_1();
    console.log("Test passed\n");

    console.log("Task #2");
    test_2();
    console.log("Test passed\n");

    console.log("Task #3");
    test_3();
    console.log("Test passed\n");

    console.log("Task #4");
    test_4();
    console.log("Test passed\n");

    console.log("Task #5");
    test_5();
    console.log("Test passed\n");

    console.log("Task #6");
    test_6();
    console.log("Test passed\n");

    console.log("All tests passed");
    console.log("I love GIT");
} catch (error) {
    console.log("Test failed:", error.message);
}