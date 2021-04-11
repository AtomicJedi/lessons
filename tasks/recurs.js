var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];
var i = 0;

function recuseLog(arr) {
	console.log(arr[i]);
	i++;
	if (i < arr.length) recuseLog(arr);
}

recuseLog(arr);