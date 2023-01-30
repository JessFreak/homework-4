export function assertObject(obj1, obj2) {
    const bool = JSON.stringify(obj1) === JSON.stringify(obj2);
    if (!bool) throw new Error("Assert objects error");
    return bool;
}
export function assertArray(arr1, arr2) {
    const bool = arr1.length === arr2.length && arr1.every((object, index) => assertObject(object, arr2[index]) );
    if (!bool) throw new Error("Assert arrays error");
}
export function assert(a, b) {
    const bool = a === b;
    if (!bool) throw new Error("Assert error");
}