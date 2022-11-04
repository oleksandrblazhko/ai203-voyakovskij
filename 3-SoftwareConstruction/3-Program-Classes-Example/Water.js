class Water {

    #name
    #volume
    #amount

    constructor(name, volume, amount) {
        this.#name = name;
        this.#volume = volume;
        this.#amount = amount;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get volume() {
        return this.#volume;
    }

    set volume(value) {
        this.#volume = value;
    }

    get amount() {
        return this.#amount;
    }

    set amount(value) {
        this.#amount = value;
    }
}