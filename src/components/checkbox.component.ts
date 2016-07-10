import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'fa-checkbox',
  template: `
    <i class="fa" [ngClass]="{ 'fa-circle-o': !checked, 'fa-check-circle-o': checked }" (click)="onClick()"></i>
    `,
  directives: [ NgClass ]
})
export class CheckboxComponent {
  @Input() checked: boolean;
  @Output() change: EventEmitter<boolean>;

  constructor() {
    this.change = new EventEmitter<boolean>();
  }

  private onClick() {
    this.change.emit(!this.checked);
  }
}
