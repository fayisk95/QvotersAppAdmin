import { Component } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  isSignedIn: any;

  constructor(){
    this.isSignedIn = JSON.parse(sessionStorage.getItem('currentUser'));
  }

}
