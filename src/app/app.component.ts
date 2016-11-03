import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyLittleTestApp';
  isHidden = false;
  isDisabled = false;

  handlePing($event){
    console.log("AppComponent.handlePing: " + $event);
  }
}
