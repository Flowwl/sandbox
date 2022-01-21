import { Factory } from "./creational/factory/Factory";

console.log("Running design-patterns")

console.log("Architectural Patterns")
console.log("# Factory")
const factory = new Factory()
factory.getShape("circle").draw()
factory.getShape("rectangle").draw()
factory.getShape("square").draw()

console.log("Behavioral Patterns")

