import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

export interface CheckboxChangeEvent {
  value: boolean;
}

@Component({
  selector: 'fa-checkbox',
  template: `
    <i class="fa" [ngClass]="{ 'fa-circle-o': !checked, 'fa-check-circle-o': checked }" (click)="onClick()"></i>
    `,
  directives: [ NgClass ]
})
export class CheckboxComponent {
  @Input() checked: boolean;
  @Output() change: EventEmitter<CheckboxChangeEvent>;

  constructor() {
    this.change = new EventEmitter<CheckboxChangeEvent>();
  }

  private onClick() {
    this.change.emit({ value: !this.checked });
  }
}
