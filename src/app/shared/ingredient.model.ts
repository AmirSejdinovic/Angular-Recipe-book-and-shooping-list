//Creating vanila TS class which will store the blueprint of ingredients
export class Ingredient{
  
   //Short whay to create propreties of object and caling it in constructor and asigned the arguments to it
   //This will automaticy create the propreties which we in the old way must create manualy before calling the consturctor
   constructor(public name:string, public amount: number){}
}