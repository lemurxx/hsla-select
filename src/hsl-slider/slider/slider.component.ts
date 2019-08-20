import { Component, OnInit, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lxx-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SliderComponent),
    multi: true
  }]
})
export class SliderComponent implements ControlValueAccessor {

  @Input() min: number = 0;
  @Input() max: number = 100;
  private value: number = 70;

  get val() {
    return this.value;
  }

  set val(v) {
    if (v != this.value) {
      this.value = v;
      this.propagateChange(this.value);
    }
  }

  //ControlValueAccessor interface
  writeValue(value: any) {
    this.value = Math.max(Math.min(value, this.max), this.min);
  }

  propagateChange: Function = (value: any) => { };

  registerOnChange(fn: Function) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: Function) { }


}