class Shop {

    #name
    #location
    #water

    constructor(name, location) {
        this.#name = name;
        this.#location = location;
    }

    get water() {
        return this.#water;
    }

    set water(value) {
        this.#water = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get location() {
        return this.#location;
    }

    set location(value) {
        this.#location = value;
    }
}