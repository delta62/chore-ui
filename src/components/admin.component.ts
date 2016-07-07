import { Component } from '@angular/core';
import { AdminHeaderComponent } from './admin-header.component';

@Component({
  selector: 'chore-admin',
  template: `<admin-header></admin-header><h1>adminis</h1>`,
  directives: [ AdminHeaderComponent ]
})
export class AdminComponent {

}
