export class Cloneable {
    clone() {
        return Object.assign({}, {...this, toString: this.toString})
    }
}
