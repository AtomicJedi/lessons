const anagram = (strA, strB) => {
	console.log(strA.toLowerCase().split('').sort().join('')
		== strB.toLowerCase().split('').sort().join(''))
}
anagram('Рак','Кар')