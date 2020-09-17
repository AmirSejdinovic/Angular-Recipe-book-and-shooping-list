import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Storing feature
  loadedFeature = 'recipe';

  //Creating the custom onNavigate method which will held the logic
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
 
}
