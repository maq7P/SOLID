class Car {
  public name: string;
  public speed: string | number;
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  getName() {
    return this.name;
  }

  minSpeed() {}
}

class MitsubishiMotors extends Car {
  static company: 'MitsubishiMotors ';
  constructor(model: string, speed: string) {
    super(MitsubishiMotors.company + model, speed);
  }
  minSpeed() {
    return 10;
  }
}

class BMW extends Car {
  static company: 'BMW ';
  constructor(model: string, speed: string) {
    super(BMW.company + model, speed);
  }
  minSpeed() {
    return 12;
  }
}

// Нарушает принцип постановки Барбара Лисков (Также и принцпи открытости закрытости)
const carSpeeds = (cars: Car[]) => {
  cars.forEach((car) => {
    return car.minSpeed();
  });
};
