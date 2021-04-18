// 12. сделать функцию которая создает массив указанной длинны и заполняет его переданными значениями.
// 	Синтаксис: array_fill(lenght: number, value: any): any[]
// Пример:

function array_fill(length, value){
	let arr = []
	for(let i = 0; i < length; i++){
		arr.push(`${value}`)
	}
	return arr
}

let result = array_fill(5, 'string') // ['string', 'string', 'string', 'string', 'string']

console.log(result)