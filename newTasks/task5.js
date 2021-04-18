// 5. Сделать функцию для проверки существования значения в не нормализированном списке данных.
// 	Синтаксис: array_contains(arr: array, search: string|regex): bool
// Пример:
const {testData, testData2, testData3, testData4} = require('./data_base')


function array_search(data, search){
	let cut = search.split('/')
	let reg =	new RegExp(cut[1], cut[2])
	let result = data.filter(rafshan => rafshan.toString().match(reg) )
		return (result.length) ? true : false
	}

let result = array_search(testData4, '/^raf.*/i') // true
let result2 = array_search(testData4, '/^azaza.*/i') // false

console.log(result)
console.log(result2)