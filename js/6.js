// Написать метод, который в консоль выводит таблицу умножения. На вход метод получает число, до которого выводит таблицу умножения. 
// В консоли должна появиться таблица. 
// Затраченное время: (18 минут)

function getMultiplicationTable(num) {
  const matrix = [];
  for (let i = 0; i <= num; i++) {
    matrix[i] = new Array;

    for (let j = 0; j <= num; j++) {
      if (j===0) {
        matrix[i][j] = i;
      } else if (i===0){
        matrix[i][j] = j;
      } else {
        matrix[i][j] = i*j;
      }
    }
   }

   const string = matrix.map((row) => row.join(' ')).join('\n')

   console.log(string)
}

runTest()

function runTest() {
  const tests = [
    5
  ]

  tests.map((test) => getMultiplicationTable(test))
}