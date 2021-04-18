// 2. Сделать функцию подсчета среднего значения, с возможностью исключения не числовых значений
// Синтаксис: array_avg(arr: array[, skipNaN: bool = false]): number
// Пример:
const {testData, testData2, testData3} = require('./data_base')

function array_avg(data, toggle){
	if(toggle){
		let arr = data.filter(item => typeof item === "number")
		let len = data.length
		let sum = eval(arr.join("+"))
		let mean = sum / len
		  return mean
	}else {
		let arr = data.filter(item => typeof item === "number")
		let len = arr.length
		let sum = eval(arr.join("+"))
		let mean = sum / len
		  return mean
	}
}

let result = array_avg(testData) // ~191
let result2 = array_avg(testData2) // ~265
let result3 = array_avg(testData2, true) // ~420
console.log(result)
console.log(result2)
console.log(result3)
// hoba