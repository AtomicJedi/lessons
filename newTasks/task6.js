// 6. Сделать функцию для получения данных с массивов по указанному пути (аминь).
// 	Синтаксис: array_get(arr: array, path:string): any
// Пример:
const {testData, testData2, testData3, testData4} = require('./data_base')

function array_get(data, search){
	return eval(`data${search}`)
}

let result = array_get(testData4, '[5].name') // "Rafshan"
let result2 = array_get(testData4, '[17][0][0][0][11][0]') // {name: "Rafshan", email: "rafshan@example.com", age: 11}
let result3 = array_get(testData4, '[17][0][0][0][11][0].name') // "Rafshan"

console.log(result)
console.log(result2)
console.log(result3)