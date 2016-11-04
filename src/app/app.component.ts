import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyLittleTestApp';
  isHidden = false;
  isDisabled = false;

  constructor() {
    console.log("AppComponent.constructor");
  }

  ngOnInit() {
    console.log("AppComponent.ngOnInit");
  }

}
