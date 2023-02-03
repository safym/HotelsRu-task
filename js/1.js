// Написать метод/функцию, который/которая на вход принимает массив городов. 
// В качестве результата возвращает строку, где города разделены запятыми, а в конце стоит точка. 
// Затраченное время: (2 минуты)

function arrayToString(array) {
  return array.join(', ') + '.'
}

runTest()

function runTest() {
  const tests = [
    ['Москва', 'Санкт-Петербург', 'Воронеж'],
    ['Cамара'],
    ['Пермь', 'Томск', 'Омск', 'Дмитров']
  ]
  const results = [
    'Москва, Санкт-Петербург, Воронеж.',
    'Cамара.',
    'Пермь, Томск, Омск, Дмитров.'
  ]
  tests.map((test, i) => {
    console.log(arrayToString(test))
    console.log('Check is:', arrayToString(test) === results[i])
  })
}