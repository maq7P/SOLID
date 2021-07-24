// Класс Animal не нарушает приницп SRP

// Отвечает за создание
class Animal {
  constructor(name: string) {}

  getAnimalName() {}
}

// Отвечает за хранение/получение
class AnimalDB {
  constructor(animal: Animal) {}

  getAnimal(animal: Animal) {}
  saveAnimal(animal: Animal) {}
}
