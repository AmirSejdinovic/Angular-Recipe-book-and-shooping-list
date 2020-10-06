//Exportzing the ts class

import { Ingredient } from '../shared/ingredient.model';

//Here I create the vanila TS class and exprot it. This class will be a blueprint for the all recipes
export class Recipe {
  //Here I create the propreties of the class and asigned them the public keyword because it can called otuside of the class. I also give the properties the specific type that it will recive
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  //Here i create the constructor method which will allow me to call the class with the new keyword. The constructor method will ran always on creating new instance of the class
  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    //Assigning the arguments that we recive to the propreties of the class
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
