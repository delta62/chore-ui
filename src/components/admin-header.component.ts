import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'admin-header',
  template: `
    <header>
      <h1>Adminis</h1>
      <nav class="header-links">
        <a class="header-link" [routerLink]="['/list']"><i class="fa fa-times" aria-hidden="true"></i></a>
      </nav>
    </header>`,
  directives: [ ROUTER_DIRECTIVES ]
})
export class AdminHeaderComponent {

}
