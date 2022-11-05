let user = new User("Dmitriy", "V", "+380962732420")
let paymentSystem = new PaymentSystem("Google Pay")
let payment = new Payment("01.01.2021", 125.3)
let shop = new Shop("Store", "Odessa")
let water = new Water("Stream", 1.5, 3)
shop.water = water
user.payment = payment
user.paymentSystem = paymentSystem

console.log(user.payment.generateCheck())
