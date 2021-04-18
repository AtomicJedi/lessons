// 7. Сделать функцию для поиска значений и пути к нему в не нормализированном списке данных (аминь).
// 	Синтаксис: array_search(arr: array, search: string|regex[, path:string = '']): [path: string, value: string|number][]
// Пример:
const {testData, testData2, testData3, testData4} = require('./data_base')

function array_search(data, search, address){
	let mainArr = []
	//поиск с использованием адреса
	if(address){
		let arrAdar = []
		let eva = eval(`data${address}`)
		let cut = search.split('/')
		let reg =	new RegExp(cut[1], cut[2])
		let result = eva.filter(rafshan => rafshan.toString().match(reg) ).toString()
		// console.log(data.indexOf(eva[11]))
		let result2 = eva.filter(arrAddrObj => {
			if(typeof arrAddrObj === 'object'){
				// console.log(eva.indexOf(arrAddrObj))
				for (let obg11 of arrAddrObj){
					// console.log(mainArr)
					//отправка в массив рафшана по адресу вложенного 11го массива
					arrAdar.push([`${address}[${eva.indexOf(arrAddrObj)}][${arrAddrObj.indexOf(obg11)}].name`, obg11.name])
					// console.log(obg11.name)
				}
			}
		}
	)

		let addrPlus = eva.indexOf(result).toString()
		//добавление точного адреса
		arrAdar.push([address + `[${addrPlus}]`, result])
		  return arrAdar
	}
//поиск по регулярке + поиск индекса обьекта и формирование адреса обьекта
	let cut = search.split('/')
	let reg =	new RegExp(cut[1], cut[2])
	let result = data.filter(item => item.toString().match(reg))
	// console.log(data.indexOf(result))
		data.filter(item => {
		if (typeof item === 'object' && item.name === result.toString()){
			let addrObj = []
			addrObj.push(`[${data.indexOf(item)}].name`, item.name)
			mainArr.push(addrObj)
		}
	})
	// console.log(addrObj)
	let addr =	data.indexOf(result.toString())
	mainArr.push([`[${addr}]`, result.toString()])
	//погнали 17
let addr17 = data.filter(async lvl17 => {
		let addr17assembly = []
		// console.log(typeof item)
		if(Array.isArray(lvl17)){
			lvl17.forEach(lvl17_0 => {

				lvl17_0.forEach(lvl17_0_0 => {

					lvl17_0_0.forEach(lvl17_0_0_0 => {

						let raf7 = lvl17_0_0_0.filter(lvl17_0_0_0_7 => {
							return lvl17_0_0_0_7.toString().match(reg)
								}
							)

						addr17assembly.push(raf7)

						lvl17_0_0_0.filter(lvl17_0_0_0_7 => {

							if(lvl17_0_0_0_7 === raf7.toString()){
								addr17assembly.push(`[${lvl17_0_0_0.indexOf(lvl17_0_0_0_7)}]`)
							}
						})

						addr17assembly.push(`[${lvl17_0_0.indexOf(lvl17_0_0_0)}]`)

					})
					addr17assembly.push(`[${lvl17_0.indexOf(lvl17_0_0)}]`)
				})
				addr17assembly.push(`[${lvl17.indexOf(lvl17_0)}]`)

			})
			addr17assembly.push(`[${data.indexOf(lvl17)}]`)
			//перезборка адреса17
			let restorStr = []
			restorStr.toString().concat().replace(/,/g,'')
			let reassembly17 = []
			addr17assembly.reverse().forEach(str => {
				if (typeof str === 'string'){
					restorStr.push(str)
				}else {
					reassembly17.push(str)
				}
			 }
			)
			console.log(restorStr)                                  //["[17][0][0][0][7]", "Rafshan"]

			// return reassembly17

		}
	 }
	)

	return 	mainArr
}

let result = array_search(testData4, '/^raf.*/i') // [["[5].name", "Rafshan"], ["[13]", "Rafshan"], ["[17][0][0][0][7]", "Rafshan"], ["[17][0][0][0][11][0].name", "Rafshan"]]
let result2 = array_search(testData4, '/^raf.*/i', '[17][0][0][0]') // [["[17][0][0][0][7]", "Rafshan"], ["[17][0][0][0][11][0].name", "Rafshan"]]
console.log(result)
console.log(result2)