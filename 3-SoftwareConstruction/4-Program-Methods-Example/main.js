function dateValidation() {

    // Create Date object
    let tomorrowDate = new Date() // current date
    tomorrowDate.setDate(tomorrowDate.getDate() + 1) // add 1 day to current date

    // Fix missing a day
    const offset = tomorrowDate.getTimezoneOffset();
    tomorrowDate = new Date(tomorrowDate.getTime() - (offset * 60 * 1000));

    // date input field
    let datePicker = document.getElementById("datePicker")

    datePicker.valueAsDate = tomorrowDate // default date
    datePicker.setAttribute("min", tomorrowDate.toISOString().substring(0, 10)) // min value is tomorrow date
}
