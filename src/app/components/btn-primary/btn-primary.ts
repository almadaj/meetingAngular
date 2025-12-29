import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type btnVariants = "primary" | "secondary"

@Component({
  selector: 'btn-primary',
  imports: [CommonModule],
  templateUrl: './btn-primary.html',
  styleUrl: './btn-primary.scss',
})

export class BtnPrimary {
  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: btnVariants = "primary"
  @Output("submit") onSubmit = new EventEmitter;

  submit() {
    this.onSubmit.emit();
  }

}
