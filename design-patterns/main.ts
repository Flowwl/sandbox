/********************************************************************************
 *                          Creational
 ******************************************************************************** */

import { Factory } from "./creational/factory";
import { Singleton } from "./creational/singleton";
import { MealBuilder } from "./creational/builder";
import { ShapeCache } from "./creational/prototype";

/********************************************************************************
 *                          Structural
 ******************************************************************************** */
import { AudioPlayer } from "./structural/adapter";
import { BridgeCircle } from "./structural/bridge";
import { GreenCircle, RedCircle } from "./structural/bridge";
import { CriteriaAnd, CriteriaFemale, CriteriaMale, CriteriaOr, CriteriaSingle, Person } from "./structural/filter";
import { Employee } from "./structural/composite";
import { RedShapeDecorator, DecoratorRectangle, DecoratorCircle } from "./structural/decorator";
import { ShapeMaker } from "./structural/facade";
import { ShapeFactory } from "./structural/flyweight";
import { ProxyImage } from "./structural/proxy";

/********************************************************************************
 *                          Behavioral
 ******************************************************************************** */
import { AbstractLogger, ConsoleLogger, ErrorLogger, FileLogger } from "./behavioral/chainOfResponsibility";
import { Broker, BuyStock, SellStock, Stock } from "./behavioral/command";
import { NameRepository } from "./behavioral/iterator";
import { AndExpression, OrExpression, TerminalExpression } from "./behavioral/expression";

import { content, section, subtitle, title, whiteContent } from "./logs";
import { MediatorUser } from "./behavioral/mediator";

title("Running design-patterns");

subtitle("Behavioral Patterns");

section("# Chain of responsibility");

function getChainOfLoggers(): AbstractLogger {

    const errorLogger = new ErrorLogger();
    const fileLogger = new FileLogger();
    const consoleLogger = new ConsoleLogger();

    errorLogger.setNextLogger(fileLogger);
    fileLogger.setNextLogger(consoleLogger);

    return errorLogger;
}

const loggerChain = getChainOfLoggers();

loggerChain.logMessage(AbstractLogger.INFO, "This is an information.");
loggerChain.logMessage(AbstractLogger.DEBUG, "This is an debug level information.");
loggerChain.logMessage(AbstractLogger.ERROR, "This is an error information.");

section("# Command");

const abcStock = new Stock();

const buyStockOrder = new BuyStock(abcStock);
const sellStockOrder = new SellStock(abcStock);

const broker = new Broker();
broker.takeOrder(buyStockOrder);
broker.takeOrder(sellStockOrder);

broker.placeOrders();

section("# Expression");

function getMaleExpression() {
    const robert = new TerminalExpression("Robert");
    const john = new TerminalExpression("John");
    return new OrExpression(robert, john);
}

//Rule: Julie is a married women
function getMarriedWomanExpression() {
    const julie = new TerminalExpression("Julie");
    const married = new TerminalExpression("Married");
    return new AndExpression(julie, married);
}

const isMale = getMaleExpression();
const isMarriedWoman = getMarriedWomanExpression();

content("John is male? " + isMale.interpret("John"));
content("Julie is a married women? " + isMarriedWoman.interpret("Married Julie"));

section("# Iterator");

const namesRepository = new NameRepository();
for (let iter = namesRepository.getIterator(); iter.hasNext();) {
    const name = iter.next();
    content("Name : " + name);
}


section("# Mediator")

const robert = new MediatorUser("Robert");
const john = new MediatorUser("John");

robert.sendMessage("Hi! John!");
john.sendMessage("Hello! Robert!");


subtitle("Creational Patterns");

section("# Builder");
const mealBuilder = new MealBuilder();

content("Veg Meal");
const vegMeal = mealBuilder.prepareVegMeal();
vegMeal.showItems().forEach((it) => content(it));
content(`Total Cost: ${vegMeal.getCost()}`);

content("");

content("Non-Veg Meal");
const nonVegMeal = mealBuilder.prepareNonVegMeal();
nonVegMeal.showItems().forEach((it) => content(it));
content(`Total Cost: ${nonVegMeal.getCost()}`);


section("# Factory");
const factory = new Factory();
content(factory.getShape("circle").draw());
content(factory.getShape("rectangle").draw());
content(factory.getShape("square").draw());


section("# Prototype");
ShapeCache.loadCache();
content(`Shape: ${ShapeCache.getShape("1")}`);
content(`Shape: ${ShapeCache.getShape("2")}`);
content(`Shape: ${ShapeCache.getShape("3")}`);


section("# Singleton");
const singleton = Singleton.getInstance();
content(singleton.showMessage());

subtitle("Structural Patterns");

section("# Adapter");
const audioPlayer = new AudioPlayer();

content(audioPlayer.play("mp3", "beyond the horizon.mp3"));
content(audioPlayer.play("mp4", "alone.mp4"));
content(audioPlayer.play("vlc", "far far away.vlc"));
content(audioPlayer.play("avi", "mind me.avi"));

section("# Bridge");
const redCircle = new BridgeCircle(100, 100, 10, new RedCircle());
const greenCircle = new BridgeCircle(100, 100, 10, new GreenCircle());

content(redCircle.draw());
content(greenCircle.draw());

section("# Composite");

const CEO = new Employee("John", "CEO", 30000);
const headSales = new Employee("Robert", "Head Sales", 20000);
const headMarketing = new Employee("Michel", "Head Marketing", 20000);
const clerk1 = new Employee("Laura", "Marketing", 10000);
const clerk2 = new Employee("Bob", "Marketing", 10000);
const salesExecutive1 = new Employee("Richard", "Sales", 10000);
const salesExecutive2 = new Employee("Rob", "Sales", 10000);

CEO.add(headSales);
CEO.add(headMarketing);

headSales.add(salesExecutive1);
headSales.add(salesExecutive2);

headMarketing.add(clerk1);
headMarketing.add(clerk2);

content(CEO);

for (const headEmployee of CEO.getSubordinates()) {
    content(headEmployee);

    for (const employee of headEmployee.getSubordinates()) {
        content(employee);
    }
}

section("# Decorator");
const dCircle = new DecoratorCircle();
const redDCircle = new RedShapeDecorator(new DecoratorCircle());
const redRectangle = new RedShapeDecorator(new DecoratorRectangle());

content("Circle with normal border");
content(dCircle.draw());

content("Circle of red border");
content(redDCircle.draw());

content("Rectangle of red border");
content(redRectangle.draw());


section("# Facade");
const shapeMaker = new ShapeMaker();

content(shapeMaker.drawCircle());
content(shapeMaker.drawRectangle());
content(shapeMaker.drawSquare());


section("# Filter");
const persons: Person[] = [
    new Person("Robert", "Male", "Single"),
    new Person("John", "Male", "Married"),
    new Person("Laura", "Female", "Married"),
    new Person("Diana", "Female", "Single"),
    new Person("Mike", "Male", "Single"),
    new Person("Bobby", "Male", "Single")
];

const male = new CriteriaMale();
const female = new CriteriaFemale();
const single = new CriteriaSingle();
const singleMale = new CriteriaAnd(single, male);
const singleOrFemale = new CriteriaOr(single, female);

function printPersons(person: Person[]) {
    content(person.map((person) => person.toString()).join(" | "));
}

whiteContent(`Males:`);
printPersons(male.meetCriteria(persons));

whiteContent(`Females:`);
printPersons(female.meetCriteria(persons));

whiteContent(`Single Males:`);
printPersons(singleMale.meetCriteria(persons));

whiteContent(`Single Or Females:`);
printPersons(singleOrFemale.meetCriteria(persons));


section("# Flyweight");
const fCircle = ShapeFactory.getCircle("orange");
fCircle.setX(50);
fCircle.setY(100);
fCircle.setRadius(100);
content(fCircle.draw());

section("# Proxy");
const image = new ProxyImage("test_10mb.jpg");

//image will be loaded from disk
content(image.display());

//image will not be loaded from disk
content(image.display());

