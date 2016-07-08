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
  @Output() changed: EventEmitter<CheckboxChangeEvent>;

  constructor() {
    this.changed = new EventEmitter<CheckboxChangeEvent>();
  }

  private onClick() {
    this.checked = !this.checked;
    this.changed.emit({ value: this.checked });
  }
}
