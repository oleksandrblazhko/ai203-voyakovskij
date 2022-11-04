let tomorrowDate = new Date()
tomorrowDate.setDate(tomorrowDate.getDate() + 1)

// Fix missing a day
const offset = tomorrowDate.getTimezoneOffset();
tomorrowDate = new Date(tomorrowDate.getTime() - (offset * 60 * 1000));

let datePicker = document.getElementById("datePicker")

datePicker.valueAsDate = tomorrowDate
datePicker.setAttribute("min", tomorrowDate.toISOString().substring(0, 10))
