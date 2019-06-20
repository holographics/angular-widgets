import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css'],
  providers: [Service1Service],
})
export class Comp5Component implements OnInit {
  name: string = 'default comp5 name';

  constructor(private service_1: Service1Service) { }

  ngOnInit() {
  }

}
