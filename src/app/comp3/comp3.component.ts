import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  @Input() name: string = 'default comp3 name';
  // @Output() emitter = new EventEmitter();
  @Output() emitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
