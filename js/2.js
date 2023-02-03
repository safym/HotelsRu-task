// Написать метод/функцию, который/которая на вход принимает число (float). 
// На выходе получает число, округленное до пятерок.
// Затраченное время: (6 минут)

function roundNumber(number) {
  const div = 5;
  const mod = number % div;

  if (mod !== 0) {
    if (mod >= 2.5) {
      return Math.trunc(number / div) * div + div
    } else {
      return Math.trunc(number / div) * div
    }
  }
  return number
}

runTest()

function runTest() {
  const tests = [
    25,
    27,
    27.5,
    27.8,
    41.7
  ]
  const results = [
    25,
    25,
    30,
    30,
    40
  ]
  tests.map((test, i) => {
    console.log(roundNumber(test), "Check is:", roundNumber(test) === results[i])
  })
}