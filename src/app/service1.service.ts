import { Injectable } from '@angular/core';
import { Service2Service } from './service2.service';
const uuidv1 = require('uuid/v1');

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  uuid = uuidv1();
  local_data: string = 'local_data unassigned.';
  constructor(private service_2: Service2Service) {}

  getData(){
    this.service_2.getData();
    alert('Service 1 local data: ' + this.local_data + '  ... ' + this.uuid);
  }

  setData(data){
    this.service_2.setData(data);
    this.local_data = data;
    alert('Service 1 local data: ' + this.local_data + '  ... ' + this.uuid);
    console.log(this);
  }

}
