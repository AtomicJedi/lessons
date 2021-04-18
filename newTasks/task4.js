// 4. Сделать функцию которая обрезает массив до указанного значения.
// 	Синтаксис: array_skip_until(arr: array, value: any): any[]

const {testData, testData2, testData3} = require('./data_base')

function array_skip_until(data, value){
	return  data.slice(data.indexOf(value) )
}

let result = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
let result2 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
let result3 = array_skip_until(testData, "asd") // []

console.log(result)
console.log(result2)
console.log(result3)