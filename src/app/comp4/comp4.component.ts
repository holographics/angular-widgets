import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  @Input() name: string = 'default comp4 name';
  @Output() emitter: EventEmitter<number> = new EventEmitter(); // @Output() emitter = new EventEmitter();
  counter: number = 0;
  constructor() {  }

  ngOnInit() {
  }

  onClick() {
    this.counter = this.counter + 1;
    this.emitter.emit(this.counter );
    // alert('...comp4 onClick(): counter changed: \n' + this.counter);
  }

  // ngOnChanges(): void {
  //   alert('...comp4 ngOnChanges(): counter changed: \n' + this.counter);
  // }


}