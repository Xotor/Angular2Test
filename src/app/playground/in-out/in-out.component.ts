import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'in-out',
  templateUrl: 'in-out.component.html',
  styleUrls: ['in-out.component.css']
})
export class InOutComponent implements OnInit {
  @Input() title: string;
  @Output() ping = new EventEmitter<string>();
  x: number;
  y: number;

  constructor() {
    console.log("InOutComponent.constructor");
  }

  ngOnInit() {
    console.log("InOutComponent.ngOnInit");
  }

  sendPing() {
    console.log("InOutComponent.sendPing");
    this.ping.emit("Ping!!");
  }

  onMousemove({clientX, clientY}:MouseEvent) {
    this.x = clientX;
    this.y = clientY;
  }
}
