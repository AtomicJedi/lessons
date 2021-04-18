// 9. Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.
// 	Доступные шаблоны:
// 	'string' => строки,
// 	'number' => числа,
// 	'int' => целые числа,
// 	'float' => числа с плавающей точкой,
// 	'bool' => true | false,
// 	'function' => функция,
// 	'array' => массив,
// 	Object => объект {name: 'string'}

// Синтаксис: array_normalize(arr: array, shema: string|Object[, transform: bool = false]): any[]
// Пример:

const {testData, testData2, testData3, testData4} = require('./data_base')


function array_normalize(data, value, option){
	let arrString = []
	if(value, !option){
		data.filter(str => {
			if(typeof str === 'string') {
				arrString.push(str)
			}
		})
	}

	if(value,option){
		data.filter(item =>{
			if(typeof item === 'number'){
				arrString.push(item)
			}if(typeof item === 'string'){
				arrString.push(item)
			}
		})
	}

	if(typeof value !== 'string' && !option){
		return []
	}
if(typeof value === 'object' && value.age && option){
	data.filter(obj => {
		if(typeof obj === 'object'){
			// let {age = } = value

			// let val = new Set(value)
			// arrString.push()
			// console.log(obj.age)
			// let {age: a = `${obj.age}`} = value
			console.log({age: a = `${obj.age}`} = value)

			// console.log(obj.eval())
		}
	} )
}


	return arrString
}

let result = array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result2 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let result3 = array_normalize(testData4, {age: 'float'}) // []
let result4 = array_normalize(testData4, {age: 'float'}, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]
console.log(result)
console.log(result2)
console.log(result3)
// console.log(result4)