import { Factory } from "./creational/factory/Factory";
import { Singleton } from "./creational/singleton/Singleton";
import { LOG_COLORS } from "./colors";

const title = (...args) => console.log(`${LOG_COLORS.fg.blue}%s\x1b[0m`, ...args)
const subtitle = (...args) => console.log(`\t${LOG_COLORS.fg.cyan}%s\x1b[0m`, ...args)
const section = (...args) => console.log(`\t\t${LOG_COLORS.fg.green}%s\x1b[0m`, ...args)
const content = (...args) => console.log(`\t\t\t${LOG_COLORS.fg.white}%s\x1b[0m`, ...args)

title("Running design-patterns")

subtitle("Architectural Patterns")
section("# Factory")
const factory = new Factory()
content(factory.getShape("circle").draw())
content(factory.getShape("rectangle").draw())
content(factory.getShape("square").draw())

section("# Singleton")
const singleton = Singleton.getInstance()
content(singleton.showMessage())


subtitle("Behavioral Patterns")

