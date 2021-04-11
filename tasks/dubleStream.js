var a = function(one, two) {
	return one + two
}
var b = function() {
	return false;
}

const paralell = (second, first) =>{
	console.log(first)
	first(second)
}

paralell([a(1,2), b()], results = (results) => {
	console.log(results)
});