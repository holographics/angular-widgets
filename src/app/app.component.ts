import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'myapp';
  last_arg;

  app_component_attr_01 = 'app.component_attr_01_value';
  app_component_attr_02 = 'app.component_attr_02_value';
  app_component_attr_03 = 'app.component_attr_03_value';
  app_component_attr_04 = 'app.component_attr_04_value';
  app_component_attr_05 = 'app.component_attr_05_value';

  onEventEmit() {
    alert('...app.component onEventEmit(): event recorded!');
  }

  onEventEmitWithArgs(arg) {
    alert('...app.component onEventEmitWithArgs(): arg received!\n' + arg + '; this.last_arg: ' + this.last_arg);
    this.last_arg = arg;
  }

  showLastArg(arg) {
    alert('...app.component showLastArg(): this.last_arg: ' + this.last_arg);
  }

}
