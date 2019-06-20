import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  name: string = 'comp1 name default'
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('...comp1.ts onClick(): click recorded!');
    alert('...comp1.ts onClick(): click recorded!');
  }

}
