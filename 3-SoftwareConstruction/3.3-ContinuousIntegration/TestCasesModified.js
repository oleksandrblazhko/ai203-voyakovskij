function chooseDateTime (date, time) {
  if (!(/(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d$/.test(date) && // correct date format dd.mm.yyyy
        new Date(date.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$2-$1-$3')) > new Date())) { // min date - tomorrow
    return -1
  }

  if (/(?:[01]\d|2[0123]):(?:[012345]\d)$/.test(time)) {
    return 1 // passed
  } else {
    process.exit(-2)
  }
}

console.log('TC1.1 Result ' + chooseDateTime('20.11.2022', '12:34'))
console.log('TC1.2 Result ' + chooseDateTime('20 11 2022', '12:34'))
console.log('TC1.3 Result ' + chooseDateTime('19.11.2022', '12:34'))
console.log('TC1.4 Result ' + chooseDateTime('20.11.2022', '12 34'))
