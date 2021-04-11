class AnimalFarm {
	constructor(name, age, children = null) {
		this.name = name;
		this.age = age;
		this.children = children;
	}
}

class Cow extends AnimalFarm {
	constructor(name, age, childs = null) {
		super(name, age, childs);
	}
}

class Cat extends AnimalFarm {
	constructor(name, age, childs = null) {
		super(name, age, childs);
	}
}

class Dog extends AnimalFarm {
	constructor(name, age, childs = null) {
		super(name, age, childs);
	}
}

function sumAnimalsAge(animals) {
	let allAge = 0;
	if (animals.length > 0) {
		allAge = allAge + animals.reduce((accomulator, current) => {
			let allAgeForChildren = 0;
			if (current.children && current.children.length > 0) {
				allAgeForChildren = allAgeForChildren + sumAnimalsAge(current.children);
			}
			return accomulator + current.age + allAgeForChildren;
		}, 0);
	}
	return allAge;
}

function createAnimals(type, name, age) {
	let arrAnimal = [];

		let personalData = {
			name: name,
			age: age,
			children: []
		};

		let item = null;

		switch (type) {
			case "Cat":
				item = new Cat(personalData.name, personalData.age);
				break;
			case "Dog":
				item = new Dog(personalData.name, personalData.age);
				break;
			case "Cow":
				item = new Cow(personalData.name, personalData.age);
				break;
		}
		if (item) {
			arrAnimal.push(item);
		}
	return arrAnimal;
}

function addChildren(animals, type, name, age) {
	animals.map(animal => {
		if (!animal.children) {
			animal.children = [];
		}
		animal.children = createAnimals(type, name, age);
	});
}

let cats = createAnimals("Cat",'soba', 4);
addChildren(cats,"Cat", "Hiroshi", 8);

let dogs = createAnimals("Dog","Ywacasi", 8);
addChildren(dogs,"Dog","Tinpo", 4);

let cows = createAnimals("Cow",  "Rori", 6);
addChildren(cows,"Cow", "Sokamoto", 5);

let animals = [...cows, ...cats, ...dogs];

const allAnimalAge = sumAnimalsAge(animals)

console.log(allAnimalAge)