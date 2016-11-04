import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor() {
    console.log("PlaygroundComponent.constructor");
  }

  ngOnInit() {
    console.log("PlaygroundComponent.ngOnInit");
  }


  handlePing($event){
    console.log("PlaygroundComponent.handlePing: " + $event);
  }

}
