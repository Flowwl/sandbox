export abstract class Game {
    abstract initialize();
    abstract startPlay();
    abstract endPlay();

    //template method
    public play(){

        //initialize the game
        this.initialize();

        //start game
        this.startPlay();

        //end game
        this.endPlay();
    }
}
