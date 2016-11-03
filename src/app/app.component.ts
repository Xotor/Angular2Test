import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isHidden = true;
  isDisabled = false;
  x: number;
  y: number;
  onMousemove($event:MouseEvent){
    this.x=$event.clientX;
    this.y=$event.clientY;
  }
}
