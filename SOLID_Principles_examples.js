/*
SOLID is an acronym that stands for five principles of object-oriented programming and design. These principles, when applied together, can make the code more maintainable, flexible, and less prone to bugs.

Single Responsibility Principle (SRP) - A class should have only one reason to change, meaning it should have only one responsibility.
Open-Closed Principle (OCP) - A class should be open for extension but closed for modification. This means that new functionality should be added by extending the class, not by modifying its existing code.
Liskov Substitution Principle (LSP) - Subtypes should be substitutable for their base types. This means that objects of a derived class should be able to replace objects of the base class without affecting the correctness of the program.
Interface Segregation Principle (ISP) - A class should not be forced to implement interfaces it does not use.
Dependency Inversion Principle (DIP) - High-level modules should not depend on low-level modules, but both should depend on abstractions.

By following these principles, code will be more readable, less complex, and easier to maintain.
 */



// In the following example, the BankAccount class has only one responsibility, which is to manage the balance of a bank account.
// It has methods for depositing and withdrawing money, but these actions are both related to the balance of the account.
// The class is easy to understand and test, and it only has one reason to change.
// Example of Single Responsibility Principle (SRP) being used properly:
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}



// In the following example, the BankAccount class has more than one responsibility, it not only manage the balance of a bank account but it also sends email notifications and logs transactions.
// This makes the class more difficult to understand and test, and it has multiple reasons to change.
// This class would be better off split into two classes, one for account management and another one for logging and notifications.
// Example of Single Responsibility Principle (SRP) not being used:
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    sendEmailNotification(email) {
        // Send email notification of transaction
    }

    logTransaction() {
        // Log transaction to a file
    }
}



// In the following example, the Shape class is open for extension (we can add new shapes by creating new classes that inherit from it), but closed for modification (we don't need to modify the Shape class to add new shapes).
// This makes the code more flexible, as new shapes can be added without affecting the existing code.
// Example of Open-Closed Principle (OCP) being used properly:
class Shape {
    area() {}
}

class Rectangle extends Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}



// In the following example, the ShapeCalculator class is not open for extension and not closed for modification.
// If we wanted to add a new shape, we would need to modify the calculateArea method by adding a new branch to the if-else statement.
// This makes the code less flexible and more prone to bugs, as new shapes can be added only by modifying the existing code.
// Example of Open-Closed Principle (OCP) not being used:
class ShapeCalculator {
    calculateArea(shape, width, height) {
        if (shape === "rectangle") {
            return width * height;
        } else if (shape === "circle") {
            return Math.PI * (width / 2) ** 2;
        }
    }
}



// In the following example, the Sparrow and Penguin classes are substitutable for their base class Bird, because they both have a fly method, and their behavior respects the fly method's contract of their parent class.
// We can use an instance of Sparrow or Penguin wherever a Bird instance is expected, and the program will still work as expected.
// Example of Liskov Substitution Principle (LSP) being used properly:
class Bird {
    fly() {}
}

class Sparrow extends Bird {
    fly() {
        console.log("I can fly at a moderate speed");
    }
}

class Penguin extends Bird {
    fly() {
        console.log("I can't fly but I can swim");
    }
}



// In the following example, the Boat class is not substitutable for its base class Vehicle, because the drive method doesn't respect the same contract as the parent class.
// The class throws an error, which is not expected by the client code that uses a Vehicle, this makes the code less predictable and more prone to bugs.
// Example of Liskov Substitution Principle (LSP) not being used:
class Vehicle {
    startEngine() {}
    drive() {}
}

class Car extends Vehicle {
    startEngine() {
        console.log("Engine started");
    }

    drive() {
        console.log("Driving on the road");
    }
}

class Boat extends Vehicle {
    startEngine() {
        console.log("Engine started");
    }

    drive() {
        throw new Error("I can't drive, I can only float!");
    }
}



// In the following example, the Sparrow and Penguin classes implement interfaces that are specific to their abilities. The Sparrow class implements the Flyable and Runnable interfaces, and the Penguin class implements the Swimmable and Runnable interfaces.
// This means that the Sparrow class does not need to implement a swim method, and the Penguin class does not need to implement a fly method.
// This makes the code more flexible and easier to understand.
// Example of Interface Segregation Principle (ISP) being used properly:
interface Flyable {
    fly();
}
interface Swimmable {
    swim();
}
interface Runnable {
    run();
}

class Sparrow implements Flyable, Runnable {
    fly() {
        console.log("I can fly at a moderate speed");
    }
    run() {
        console.log("I can run on the ground");
    }
}

class Penguin implements Swimmable, Runnable {
    swim() {
        console.log("I can swim in water");
    }
    run() {
        console.log("I can run on the ground");
    }
}



// In the following example, the Sparrow and Penguin classes are forced to implement methods that are not relevant to them, which goes against the ISP.
// The classes are forced to implement methods that they don't need and will never use, this makes the code less flexible and harder to understand.
// The classes throw error for methods that are not implemented and not related to them.
// Example of Interface Segregation Principle (ISP) not being used:
interface Animal {
    fly();
    swim();
    run();
}

class Sparrow implements Animal {
    fly() {
        console.log("I can fly at a moderate speed");
    }
    swim() {
        throw new Error("I can't swim, I can only fly!");
    }
    run() {
        console.log("I can run on the ground");
    }
}

class Penguin implements Animal {
    fly() {
        throw new Error("I can't fly, I can only swim!");
    }
    swim() {
        console.log("I can swim in water");
    }
    run() {
        console.log("I can run on the ground");
    }
}



// In the following example, the Car class depends on an abstraction (the Engine class) rather than a specific implementation (e.g. GasEngine or ElectricEngine).
// This means that the Car class is not tightly coupled to any specific engine implementation and can easily be switched to use a different engine if needed.
// The Car class also depends on the abstraction, which makes the code more flexible and easier to change.
// Example of Dependency Inversion Principle (DIP) being used properly:
class Engine {
    start() {
        console.log("Engine started");
    }
}

class Car {
    constructor(engine) {
        this.engine = engine;
    }
    start() {
        this.engine.start();
    }
}



// In the following example, the Car class is tightly coupled to the GasEngine class.
// If the requirements of the application change and a different type of engine is needed, the Car class would have to be modified, breaking the Open-Closed principle.
// This makes the code less flexible and harder to change, and also makes the Car class dependent on the implementation of the Engine.
// Example of Dependency Inversion Principle (DIP) not being used:
class GasEngine {
    start() {
        console.log("Gas Engine started");
    }
}

class Car {
    constructor() {
        this.engine = new GasEngine();
    }
    start() {
        this.engine.start();
    }
}
