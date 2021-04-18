// 11. Сделать функцию которая возвращает уникальные элементы массива.
// 	Синтаксис: array_unique(arr: array): any[]
// Пример:

const {testData, testData2, testData3, testData4} = require('./data_base')

function array_unique(dataConcat){
	let set = new Set(dataConcat)
	return [...set]
}

let result = array_unique(testData.concat(testData2)) // [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
console.log( result)