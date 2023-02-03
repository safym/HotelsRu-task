// Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов 
// (= в двух и более, причем в каждом). На вход подаются два массива. На выходе массив с необходимыми совпадениями.
// Затраченное время: (25 минут)

function getRepeatedElements(fisrtArray, secondArray) {
  const firstArrayDuplicates = getArrayOfduplicate(fisrtArray)
  const secondArrayDuplicates = getArrayOfduplicate(secondArray)
  const result = [];
  
  firstArrayDuplicates.map((element) => {
    if (secondArrayDuplicates.includes(element)) {
      result.push(element)
    }
  })
  return result;
}

function getArrayOfduplicate(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i && !result.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result;
}

runTest()

function runTest() {
  const tests = [
    [
      [7, 17, 1, 9, 1, 17, 56, 56, 23],
      [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
    ]
  ]
  const results = [
    [1, 17]
  ]
  tests.map((test, i) => {
    const fisrtArray = test[0]
    const secondArray = test[1]
    console.log(getRepeatedElements(fisrtArray, secondArray))
    console.log("Check is:", JSON.stringify(getRepeatedElements(fisrtArray, secondArray)) === JSON.stringify(results[i]))
  })
}