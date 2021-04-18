// 3. Сделать функцию которая разбивает массив на подмассивы указанной длинны.
// 	Синтаксис: array_chunk(arr: array, count: number): any[]
// Пример:
const {testData, testData2, testData3} = require('./data_base')

function array_chunk(data, value){
	let freshArray = []
	while (data.length){
		freshArray.push(data.splice(0 , value))
	}
return freshArray
}

let result = array_chunk(testData2, 3) // [[1, 2], [1990, 85], [24, 5], [7, 8.1]]
console.log(result)
