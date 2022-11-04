class User {

    #name
    #surname
    #phone
    #shop
    #paymentSystem
    #payment

    constructor(name, surname, phone) {
        this.#name = name;
        this.#surname = surname;
        this.#phone = phone;
    }
    
    confirmPayment() {
        return `Payment ${this.#payment} confirmed!`
    }

    get payment() {
        return this.#payment;
    }

    set payment(value) {
        this.#payment = value;
    }

    get paymentSystem() {
        return this.#paymentSystem;
    }

    set paymentSystem(value) {
        this.#paymentSystem = value;
    }

    get shop() {
        return this.#shop;
    }

    set shop(value) {
        this.#shop = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get surname() {
        return this.#surname;
    }

    set surname(value) {
        this.#surname = value;
    }

    get phone() {
        return this.#phone;
    }

    set phone(value) {
        this.#phone = value;
    }
}