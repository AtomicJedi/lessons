// 1. Сделать функцию поиска значений в массиве.
// 	Синтаксис: array_find(arr: array, search: string|regex): string|number[]|null
// Пример:
const {testData, testData2, testData3} = require('./data_base')

function array_find(data, search) {
	if(search[0] !== '/'){
		let str = data.filter(rafshan => rafshan.toString().match(search) )
		return str
	}else {
		let cut = search.split('/')
		let reg =	new RegExp(cut[1], cut[2])
		let regular = data.filter(rafshan => rafshan.toString().match(reg) )
		return regular
	}
}


let result = array_find(testData, '/^raf.*/i')
let result2 = array_find(testData, "Rafshan")
console.log(result)
console.log(result2)








