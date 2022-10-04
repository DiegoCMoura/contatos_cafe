import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styles: [
  ]
})
export class InputFormComponent implements OnInit, AfterContentInit {

  @Input() label!: string;
  @Input() errorMessage!: string;

  input: any;

  @ContentChild(NgModel) model!: NgModel;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.input = this.model;
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel');
    }
  }

  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
