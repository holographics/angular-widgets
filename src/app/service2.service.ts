import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {
	data = 'service 2. data was not yet assigned ';
  constructor() {}

  getData(){
    alert('...Service 2 getData(): data requested: \n' + this.data);
  }


  setData(data){
    this.data = data;
    alert('...Service 2 setData(): data set: \n' + this.data);
  }

}

