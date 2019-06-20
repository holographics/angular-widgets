import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  @Input() name: string = 'default comp2 name';


  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('...comp2.ts onClick(): click recorded!');
    alert('...comp2.ts onClick():  click recorded!');
  }

}
