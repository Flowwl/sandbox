export class Singleton {
    private static instance = new Singleton()

    private constructor() {}

    public static getInstance() {
        return this.instance;
    }

    public showMessage(){
        return "Hello from singleton";
    }
}
