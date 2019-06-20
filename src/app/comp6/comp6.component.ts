import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.css'],
  providers: [Service1Service],
})
export class Comp6Component implements OnInit {
  name: string = 'default comp6 name';
  constructor(private service_1: Service1Service) { }

  ngOnInit() {
  }




}
