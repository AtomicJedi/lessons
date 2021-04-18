// 10. Сделать функцию которая сможет делать срез данных с ассоциативного массива.
// 	Синтаксис: array_pluck(arr: array, path: string): any[]
// Пример:
const {testData, testData2, testData3, testData4} = require('./data_base')

function array_pluck(data, value){
	let arr = []
	data.filter(item => {
			return arr.push(eval(`item.${value}`))
		}
	)
	return arr
}

let result = array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
let result2 = array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]

console.log(result)
console.log(result2)