import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'chore-list-header',
  template: `<header>Todo <a [routerLink]="['/admin']">admin</a></header>`,
  directives: [ ROUTER_DIRECTIVES ]
})
export class ListHeaderComponent {

}
