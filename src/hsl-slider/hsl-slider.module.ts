import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HslRgbService } from './services/color/hsl-rgb.service';
import { GradientService } from './services/color/gradient.service';
import { HslSelectComponent } from './hsl-select/hsl-select.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    HslSelectComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HslSelectComponent,
    SliderComponent
  ]
})
export class HslSliderModule { }



