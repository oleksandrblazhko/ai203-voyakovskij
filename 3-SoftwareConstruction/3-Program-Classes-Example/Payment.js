class Payment {

    #date
    #sum

    constructor(date, sum) {
        this.#date = date;
        this.#sum = sum;
    }

    generateCheck() {
        return `Payment date ${this.#date}, payment sum ${this.#sum}`
    }

    get date() {
        return this.#date;
    }

    set date(value) {
        this.#date = value;
    }

    get sum() {
        return this.#sum;
    }

    set sum(value) {
        this.#sum = value;
    }
}
