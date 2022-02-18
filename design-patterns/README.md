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
   
  
- ### Expression
  - Permet de faire des liens entre des expressions données dans le terminal 
  > Exemple: 
  > ```Typescript
  > function getMaleExpression() {
  >   const robert = new TerminalExpression("Robert");
  >   const john = new TerminalExpression("John");
  >   return new OrExpression(robert, john);
  > }
  > const isMale = getMaleExpression();
  > content("John is male? " + isMale.interpret("John"));

- ### Mediator
  - Permet de réduire la complexité de la communication entre plusieurs objets/classes

- ### Memento
  - Permet de restorer un ancien state (via une liste d'action, un peux comme le undo/redo)
  
- ### Observer
  - Permet de notifier à tous les objets reliés l'update du sujet

- ### State
  - Permet de faire en sorte que le comportement d'une classe change selon son état

- ### Strategy
  - Permet de modifier le comportement d'une fonction au runtime

- ### Template
  - Permet de templater un objet permettant d'impémenter des objets ayant la même forme.

- ### Visitor
  - Permet de changer l'éxecution d'une class selon son visiteur


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

## Others

- ### Business Delegate
  - Permet de séparer la logique business de la présentation

- ### Composite Entity
  - Permet de représenter un graph d'objets

- ### Data Access Object
  - Permet de séparer l'accès en base de données qui est une action de bas-niveau des données business qui sont de plus haut niveau

- ### Front Controller
  - Permet d'implémenter un handler de request centralisé

- ### Intercepting Filter
  - Permet de faire du pre-processing de requête/réponse

- ### MVC
  - Permet de séparer les couches dans l'application
  
- ### Null Object
  - Permet de mock un objet grâce à un nullObject au lieu de check s'il est null

- ### Service Locator
  - Permet de mieux localiser des services au sein de l'application avec un système de cache

- ### Transfer Object
  - Permet de passer au serveur plusieurs attributs d'un coup

