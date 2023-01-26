export const task4 = {

    map: {},

    set(key, value) {
        this.map[key] = value;
    },

    get(key) {

        if ( typeof(key) !== "object" && Object.keys(this.map).includes(`${key}`) ) { //щоб працювало з вводом без лапок
            return this.map[key];

        } else if (typeof(key) === "object" && Object.keys(this.map).includes(key)) { //щоб не переводило об'єкт в рядок
            return this.map[key];

        } else return undefined;
    },

    has(key) {
        if ( typeof(key) !== "object") {
            return !!Object.keys(this.map).includes(`${key}`);

        } else return !!Object.keys(this.map).includes(key);
    },

    delete(key) {
        delete this.map[key];
    },

    clear() {
        for (let key in this.map) {
            delete this.map[key];
        }
    },

    size() {
        return Object.keys(this.map).length;
    },

    keys() {
        return Object.keys(this.map);
    },

    values() {
        return Object.values(this.map);
    },

    entries() {
        return Object.entries(this.map);
    }
}