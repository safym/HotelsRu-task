// Написать метод/функцию, который/которая на вход принимает число (int), 
// а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству. 
// Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».
// Затраченное время: (25 минут)

function getDeclination(num, case1, case2, case3) {
  const lastNum = num % 10;
  const tenNum = Math.floor(num / 10)

  if ((lastNum == 0) || (tenNum != 1 && lastNum >= 5) || (tenNum == 1)) {
    return `${num} ${case3}`
  } else if (lastNum >= 2 && lastNum <= 4 && tenNum != 1) {
    return `${num} ${case2}`
  } else {
    return `${num} ${case1}`
  }
}

runTest()

function runTest() {
  const tests = [
    [0, 'Компьютер', 'Компьютера', 'Компьютеров'],
    [1, 'Компьютер', 'Компьютера', 'Компьютеров'],
    [2, 'Компьютер', 'Компьютера', 'Компьютеров'],
    [5, 'Компьютер', 'Компьютера', 'Компьютеров'],
    [10, 'Компьютер', 'Компьютера', 'Компьютеров'],
    [11, 'Компьютер', 'Компьютера', 'Компьютеров'],
    [19, 'Компьютер', 'Компьютера', 'Компьютеров'],
    [20, 'Компьютер', 'Компьютера', 'Компьютеров'],
    [21, 'Компьютер', 'Компьютера', 'Компьютеров'],
    [22, 'Компьютер', 'Компьютера', 'Компьютеров'],
    [25, 'Компьютер', 'Компьютера', 'Компьютеров'],
    [30, 'Компьютер', 'Компьютера', 'Компьютеров'],
    [31, 'Компьютер', 'Компьютера', 'Компьютеров'],
    [100, 'Компьютер', 'Компьютера', 'Компьютеров'],
    [101, 'Компьютер', 'Компьютера', 'Компьютеров'],
  ]
  const results = [
    '0 Компьютеров',
    '1 Компьютер',
    '2 Компьютера',
    '5 Компьютеров',
    '10 Компьютеров',
    '11 Компьютеров',
    '19 Компьютеров',
    '20 Компьютеров',
    '21 Компьютер',
    '22 Компьютера',
    '25 Компьютеров',
    '30 Компьютеров',
    '31 Компьютер',
    '100 Компьютеров',
    '101 Компьютер',
  ]
  tests.map((test, i) => {
    const num = test[0]
    const case1 = test[1]
    const case2 = test[2]
    const case3 = test[3]

    console.log(getDeclination(num, case1, case2, case3))
    console.log("Check is:", getDeclination(num, case1, case2, case3) === results[i])
  })
}