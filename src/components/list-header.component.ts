import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'chore-list-header',
  template: `
    <header>
      <h1>Todo</h1>
      <nav class="header-links">
        <a class="header-link" [routerLink]="['/admin']">
          <i class="fa fa-cog"></i>
        </a>
      </nav>
    </header>`,
  directives: [ ROUTER_DIRECTIVES ]
})
export class ListHeaderComponent {

}
