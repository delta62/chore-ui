import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'admin-header',
  template: `<header>Admin<a [routerLink]="['/list']">exit</a></header>`,
  directives: [ ROUTER_DIRECTIVES ]
})
export class AdminHeaderComponent {

}
