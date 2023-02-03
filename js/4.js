// Написать метод/функцию, который/которая на вход принимает целое число, 
// а на выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и самого себя).
// Затраченное время: (10 минут)

function isPrime(num) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    let mod = num % i;
    if (mod == 0) {
      isPrime = false;
      return isPrime;
    }
  }
  return isPrime;
}

runTest()

function runTest() {
  const tests = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ]
  const results = [
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    true,
    false,
    false
  ]
  tests.map((test, i) => {
    console.log(isPrime(test))
    console.log("Check is:", isPrime(test) == results[i])
  })
}