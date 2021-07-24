class Animal {
    constructor(
        public name: string
    ) {}

    getAnimalName() {
        return this.name
    }
}

const animals: Animal[] = [
    new Animal('lion'),
    new Animal('dog')
]
interface InstanceAnimal {
    name: string
}
/* 
    При добавлении нового животного придётс изменять метод, что противорчит OCP
*/
const animalSound = (animals: InstanceAnimal[]) => {
    for(let i = 0; i < animals.length; i++){
        switch (animals[i].name) {
            case 'lion':
                return 'roar'
            case 'dog':
                return 'af'
            default:
                break;
        }
    }
}
