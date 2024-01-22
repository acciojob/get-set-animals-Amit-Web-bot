//complete this code
class Animal {
	constructor(species){
		this._species = species
	}
	get species(){
		return this._species
	}
	makesound(species){
		console.log(`The ${this._species} makes a sound`)
	}
}

class Dog extends Animal {
	super(dog).makesound();
	bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
	super(cat).makesound();
	purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
