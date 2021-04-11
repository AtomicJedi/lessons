let obj = {
	name: "Hatori",
	age: 77,
	job: "killer"
}

let clone = () => console.log({...obj})
clone(obj)