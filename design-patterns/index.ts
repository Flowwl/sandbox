import { Factory } from "./creational/factory/Factory";
import { Singleton } from "./creational/singleton/Singleton";
import { LOG_COLORS } from "./colors";
import { MealBuilder } from "./creational/builder/MealBuilder";
import { ShapeCache } from "./creational/prototype/ShapeCache";
import { AudioPlayer } from "./structural/adapter/mediaPlayer/AudioPlayer";
import { Circle } from "./structural/bridge/shapes/Circle";
import { RedCircle } from "./structural/bridge/drawApi/RedCircle";
import { GreenCircle } from "./structural/bridge/drawApi/GreenCircle";

const title = (...args) => console.log(`${LOG_COLORS.fg.blue}%s\x1b[0m`, ...args)
const subtitle = (...args) => console.log(`\t${LOG_COLORS.fg.cyan}%s\x1b[0m`, ...args)
const section = (...args) => console.log(`\t\t${LOG_COLORS.fg.green}%s\x1b[0m`, ...args)
const content = (...args) => console.log(`\t\t\t${LOG_COLORS.fg.white}%s\x1b[0m`, ...args)

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

section("# Adapter")
const redCircle = new Circle(100, 100, 10, new RedCircle())
const greenCircle = new Circle(100, 100, 10, new GreenCircle())

content(redCircle.draw())
content(greenCircle.draw())



