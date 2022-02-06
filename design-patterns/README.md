# Design patterns

## Behavioral

- ### Chain of responsibility
  - Permet de call une suite de fonction ou de la même class
  > Exemple: log ERROR -> log DEBUG -> log NORMAL
  
- ### Command
  - Permet d'executer plusieurs commandes d'affilé
  > Exemple: 
  > ```Typescript
  > for(let order of orders) {
  >   order.exectue() // sell or buy
  > }
## Creational

- ### Builder
  - Permet de build différents set d'items
  > Exemple: <br/>
  > MealBuilder.ts
  > ```Typescript
  > class MealBuilder {
  > 
  >    prepareVegMeal() {
  >      const meal = new Meal();
  >      meal.addItem(new VegBurger());
  >      meal.addItem(new Coke());
  >      return meal;
  >    }
  > 
  >    prepareNonVegMeal() {
  >      const meal = new Meal();
  >      meal.addItem(new ChickenBurger());
  >      meal.addItem(new Pepsi());
  >      return meal;
  >    }
  > }
  > ```
  

- ### Factory
  - Permet de créer une instance spécifique à partir d'un type spécifique
  > Exemple : <br/>
  > ```Typescript
  >  const circle: Circle = new ShapeFactory("circle")
  > ```


- ### Prototype
  - Permet de cloner une instance pour pouvoir la mettre en cache (en cas de requêtes trop lourdes par exemple)
  

- ### Singleton
    - Avoir une seule instance globale. 
    - Permet de ne pas devoir instancier à chaque fois. 

## Structural

- ### Adapter
  - Permet d'effectuer des actions plus spécifiques selon un type donné en implémentant une classe plus spécifique
   > Exemple : <br/>
   > AudioPlayer.ts
   > ```Typescript
   > export class AudioPlayer implements MediaPlayer {
   >   mediaAdapter: MediaAdapter;
   >   
   >   public play(audioType: string, fileName: string) {
   >     if (audioType === "mp3") {
   >       return "Playing mp3 file. Name: " + fileName;
   >     }
   >     else if (audioType === "vlc" || audioType === "mp4") {
   >       this.mediaAdapter = new MediaAdapter(audioType);
   >       return this.mediaAdapter.play(audioType, fileName);
   >     } else {
   >       return "Invalid media. " + audioType + " format not supported";
   >     }
   >   }
   > }
   > ```
   > MediaAdapter.ts
   > ```Typescript
   > class MediaAdapter implements MediaPlayer {
   >   advancedMusicPlayer: AdvancedMediaPlayer;
   > 
   >   public play(audioType: string, fileName: string) {
   >     if (audioType === "vlc") {
   >       return this.advancedMusicPlayer.playVlc(fileName);
   >     } else if (audioType === "mp4") {
   >       return this.advancedMusicPlayer.playMp4(fileName);
   >     }
   >   }
   > }
   > ```

- ### Bridge
  - Permet de lier 2 interfaces ensemble
   > Exemple: <br/>
   Shape.ts
   > ```Typescript
   > abstract class Shape {
   >    protected drawAPI: DrawAPI;
   >    public abstract draw();
   > }
   > ```
   > Circle.ts
   > ```Typescript
   > export class Circle extends Shape {
   >   radius: number
   >   x: number
   >   y: number
   > 
   >   draw() {
   >     return this.drawAPI.drawCircle(this.radius, this.x, this.y)
   >   }
   > }
   > ```


- ### Composite
  - Permet d'avoir des références vers une liste du même objet afin d'avoir un structure hierarchique
  > Exemple :
  > ```Typescript
  > class Employee {
  >    subordinates: Employee[]
  > }
  > ```
- ### Decorator
  - Permet de rajouter des propriété à une classe déjà définie
  > Exemple: Rajouter une `borderColor` à une classe `Shape`

- ### Facade
  - Permet de céer une classe dont la responsabilité est de gérer toutes les actions d'un sous classe
  > Exemple: La classe `ShapeMaker` a la responsabilité de pouvoir `draw` toutes les `Shape`

- ### Filter
  - Permet de filter des données

- ### Flyweight
  - Permet de créer une hashmap qui conserve en cache des données afin de limiter la consommation de ressources 
- ### Proxy
  - Permet de mettre un objet en cache afin de le réafficher plus tard sans le load
