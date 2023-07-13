class RailwayCar {
    #weight;
    #cargoUnits;
    constructor(weight, cargoUnits) {
        if (weight < 0) {
            this.displayError("Неверный вес");
            cargoUnits = 0;
            this.#weight = "Нет груза";
        }
        else if (weight === 0 && cargoUnits !== 0) {
            this.displayError("Вес равняется 0, а количество единиц товара - положительное число");
            cargoUnits = 0;
            this.#weight = weight;
        }
        else this.#weight = weight;
        if (cargoUnits < 0) {
            this.displayError("Неверное количество единиц товара");
            this.zeroWeight();
            this.#cargoUnits = "Нет груза";
        }
        else if (cargoUnits === 0 && weight !== 0) {
            this.displayError("Количество единиц товара равняется 0, а вес - положительное число");
            this.zeroWeight();
            this.#cargoUnits = cargoUnits;
        }
        else this.#cargoUnits = cargoUnits;
    }
    get weight() {
        return this.#weight;
    }
    get cargoUnits() {
        return this.#cargoUnits;
    }
    displayError(errorMessage) {
        document.write("Ошибка: " + errorMessage);
        document.write("<br><br>");
    }
    toString() {
        document.write("<br>Вес: " + this.weight);
        document.write("<br>Количество единиц товара: " + this.cargoUnits);
    }
    zeroWeight(){
        this.#weight = 0;
    }
    zeroUnits() {
        this.#cargoUnits = 0;
    }
}
class CarTransportCar extends RailwayCar {
    #carCapacity;
    #carType;
    constructor(weight, cargoUnits, carCapacity, carType) {
        super(weight, cargoUnits);
        if (isNaN(carCapacity)) {
            this.displayError('Параметр "carCapacity" не является числом');
            this.zeroWeight();
            this.zeroUnits();
            this.#carCapacity = "Нет груза";
        }
        else if (carCapacity <= 0) {
            this.displayError("Неверная вместимость вагона для перевозки автомобилей");
            this.zeroWeight();
            this.zeroUnits();
            this.#carCapacity = "Нет груза";
        }
        else if (cargoUnits > carCapacity) {
            this.displayError("Превышена допустимая вместимость вагона, уменьшите количество единиц товара!");
            this.#carCapacity = carCapacity;
        }
        else this.#carCapacity = carCapacity;
        if (carType === "Фургон" || carType === "Пикап" ) {
            this.zeroWeight();
            this.zeroUnits();
            this.#carType = "Нет груза";
            this.displayError("Недопустимый тип автомобиля для перевозки");
        }
        else this.#carType = carType;
    }
    get carCapacity() {
        return this.#carCapacity;
    }
    get carType() {
        return this.#carType;
    }
    toString() {
        super.toString();
        document.write("<br>Максимальная вместимость вагона: " + this.carCapacity);
        document.write("<br>Тип автомобиля для перевозки: " + this.carType);
        document.write("<br>Тип вагона: Вагон для перевозки автомобилей");
    }
}
class TankCar extends RailwayCar {
    #tankCapacity;
    #liquidType;
    constructor(weight, cargoUnits, tankCapacity, liquidType) {
        super(weight, cargoUnits);
        if (isNaN(tankCapacity)) {
            this.displayError('Параметр "tankCapacity" не является числом');
            this.zeroWeight();
            this.zeroUnits();
            this.#tankCapacity = "Нет груза"
        }
        else if (tankCapacity <= 0) {
            this.displayError("Неверная вместимость цистерны");
            this.zeroWeight();
            this.zeroUnits();
            this.#tankCapacity = "Нет груза";
        }
        else if (cargoUnits > tankCapacity) {
            this.displayError("Превышена допустимая вместимость цистерны, уменьшите количество единиц товара!");
            this.#tankCapacity = tankCapacity;
        }
        else this.#tankCapacity = tankCapacity;
        if (liquidType === "Вода") {
            this.zeroWeight();
            this.zeroUnits();
            this.#liquidType = "Нет груза";
            this.displayError("Недопустимый тип жидкости для перевозки");
        }
        else this.#liquidType = liquidType;
    }
    get tankCapacity() {
        return this.#tankCapacity;
    }
    get liquidType() {
        return this.#liquidType;
    }
    toString() {
        super.toString();
        document.write("<br>Максимальная вместимость цистерны: " + this.tankCapacity);
        document.write("<br>Тип жидкости для перевозки: " + this.liquidType);
        document.write("<br>Тип вагона: Цистерна");
    }
}
let railwayCars = [
    new CarTransportCar(9000, 5, 10, "Седан"),
    new TankCar(1500, 10, 15, "Нефть"),
    new CarTransportCar(9000, 5, 10, "Фургон"),
    new TankCar(1500, 10, 15, "Вода"),
    new CarTransportCar(0, 5, 10, "Седан"),
    new TankCar(1500, 0, 15, "Нефть"),
    new CarTransportCar(100, 34, 0, "Минивэн"),
    new TankCar(67, 12, 0, "Газ"),
    new CarTransportCar(100, 34, 33, "Минивэн"),
    new TankCar(67, 12, 11, "Газ"),
  ];

  railwayCars.forEach((car) => {
    car.toString();
    document.write('<br>');
  });  