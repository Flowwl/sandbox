import { Factory } from "./creational/factory/Factory";
import { Singleton } from "./creational/singleton/Singleton";
import { LOG_COLORS } from "./colors";
import { MealBuilder } from "./creational/builder/MealBuilder";
import { ShapeCache } from "./creational/prototype/ShapeCache";
import { AudioPlayer } from "./structural/adapter/mediaPlayer/AudioPlayer";
import { Circle } from "./structural/bridge/shapes/Circle";
import { RedCircle } from "./structural/bridge/drawApi/RedCircle";
import { GreenCircle } from "./structural/bridge/drawApi/GreenCircle";
import { Person } from "./structural/filter/Person";
import { CriteriaMale } from "./structural/filter/criterias/CriteriaMale";
import { CriteriaFemale } from "./structural/filter/criterias/CriteriaFemale";
import { CriteriaSingle } from "./structural/filter/criterias/CriteriaSingle";
import { CriteriaAnd } from "./structural/filter/criterias/CriteriaAnd";
import { CriteriaOr } from "./structural/filter/criterias/CriteriaOr";
import { Employee } from "./structural/composite/Employee";

const title = (...args) => console.log(`${LOG_COLORS.fg.blue}%s\x1b[0m`, ...args)
const subtitle = (...args) => console.log(`\t${LOG_COLORS.fg.cyan}%s\x1b[0m`, ...args)
const section = (...args) => console.log(`\t\t${LOG_COLORS.fg.green}%s\x1b[0m`, ...args)
const content = (...args) => console.log(`\t\t\t${LOG_COLORS.fg.grey}%s\x1b[0m`, ...args)

title("Running design-patterns")

subtitle("Behavioral Patterns")

subtitle("Creational Patterns")


section("# Builder")
const mealBuilder = new MealBuilder()

content("Veg Meal")
const vegMeal = mealBuilder.prepareVegMeal()
vegMeal.showItems().forEach((it) => content(it))
content(`Total Cost: ${vegMeal.getCost()}`)

content("")

content("Non-Veg Meal")
const nonVegMeal = mealBuilder.prepareNonVegMeal()
nonVegMeal.showItems().forEach((it) => content(it))
content(`Total Cost: ${nonVegMeal.getCost()}`)


section("# Factory")
const factory = new Factory()
content(factory.getShape("circle").draw())
content(factory.getShape("rectangle").draw())
content(factory.getShape("square").draw())


section("# Prototype")
ShapeCache.loadCache()
content(`Shape: ${ShapeCache.getShape("1")}`)
content(`Shape: ${ShapeCache.getShape("2")}`)
content(`Shape: ${ShapeCache.getShape("3")}`)


section("# Singleton")
const singleton = Singleton.getInstance()
content(singleton.showMessage())

subtitle("Structural Patterns")

section("# Adapter")
const audioPlayer = new AudioPlayer();

content(audioPlayer.play("mp3", "beyond the horizon.mp3"));
content(audioPlayer.play("mp4", "alone.mp4"));
content(audioPlayer.play("vlc", "far far away.vlc"));
content(audioPlayer.play("avi", "mind me.avi"));

section("# Bridge")
const redCircle = new Circle(100, 100, 10, new RedCircle())
const greenCircle = new Circle(100, 100, 10, new GreenCircle())

content(redCircle.draw())
content(greenCircle.draw())

section("# Composite")

const CEO = new Employee("John","CEO", 30000);
const headSales = new Employee("Robert","Head Sales", 20000);
const headMarketing = new Employee("Michel","Head Marketing", 20000);
const clerk1 = new Employee("Laura","Marketing", 10000);
const clerk2 = new Employee("Bob","Marketing", 10000);
const salesExecutive1 = new Employee("Richard","Sales", 10000);
const salesExecutive2 = new Employee("Rob","Sales", 10000);

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

section("# Filter")

const persons: Person[] = [
    new Person("Robert","Male", "Single"),
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
    content(person.map((person) => person.toString()).join(" | "))
}
content(`${LOG_COLORS.fg.white}Males:`);
printPersons(male.meetCriteria(persons));

content(`${LOG_COLORS.fg.white}Females:`);
printPersons(female.meetCriteria(persons));

content(`${LOG_COLORS.fg.white}Single Males:`);
printPersons(singleMale.meetCriteria(persons));

content(`${LOG_COLORS.fg.white}Single Or Females:`);
printPersons(singleOrFemale.meetCriteria(persons));



