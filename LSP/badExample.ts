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

  minSpeed(speed) {
    return speed;
  }
}

class MitsubishiMotors extends Car {
  static company: 'MitsubishiMotors ';
static minSpeed: 12;
  constructor(model: string, speed: string) {
    super(MitsubishiMotors.company + model, speed);
  }
}

class BMW extends Car {
  static company: 'BMW ';
    static minSpeed: 10;
  constructor(model: string, speed: string) {
    super(BMW.company + model, speed);
  }
}

// Нарушает принцип постановки Барбара Лисков (Также и принцпи открытости закрытости)
const carSpeeds = (cars: Car[]) => {
  cars.forEach((car) => {
    if (car instanceof BMW) {
      return car.minSpeed(BMW.minSpeed);
    }
    if (car instanceof MitsubishiMotors) {
      return car.minSpeed(MitsubishiMotors.minSpeed);
    }
  });
};
