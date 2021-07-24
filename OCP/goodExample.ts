class AnimaL {
  constructor(public name: string) {}

  getAnimalName() {}
  makeSound() {}
}

class Lion implements AnimaL {
  constructor(public name: string, public sound: string) {
  }

  getAnimalName() {
    return this.name;
  }

  makeSound() {
      return this.sound
  }
}

const animalsSounds = (animals: AnimaL[]) => {
    animals.forEach(animal => {
        return animal.makeSound()
    })
} 
