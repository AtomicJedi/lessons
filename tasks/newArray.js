let arr = Array(1, 2, 3, 4);
let arr2 = [2];
if(!Array.prototype.appends){
	Array.prototype.appends = function(item){
		return this.splice(0,0, item)
	}
}
arr.appends(5)
arr2.appends(3)
console.log(arr, arr2)
