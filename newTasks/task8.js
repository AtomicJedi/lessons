// 8. Создать функцию которая создает объект на основании двух представленных
// массивов используя один как ключи, а другой как значения.
// 	Не подходящие ключи массивов должны быть исключены.
// 	Синтаксис: array_combine(keys: array, values: array): Object
// Пример:

const {testData, testData2, testData3, testData4} = require('./data_base')

function array_combine(data, data2){
	let arr = [].concat(data, data2).filter(item => item.toString() !== "boolean")
	let freshArray = []
	while (arr.length){
		freshArray.push(arr.splice(0 , 2))
	}
	let obj = Object.fromEntries(freshArray)
	console.log(obj)
}
let result = array_combine(testData, testData2)

// let set = new Set(dataConcat).entries()
// return set