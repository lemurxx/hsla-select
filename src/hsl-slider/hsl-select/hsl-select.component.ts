import { Component, ViewEncapsulation, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { GradientService } from '../services/color/gradient.service';
import { HslRgbService, rgba, hsla } from '../services/color/hsl-rgb.service';


@Component({
  selector: 'lxx-hsl-select',
  templateUrl: './hsl-select.component.html',
  styleUrls: ['./hsl-select.component.less'],
  providers: [GradientService, HslRgbService],
  encapsulation: ViewEncapsulation.None
})
export class HslSelectComponent implements OnInit {

  constructor() {
    this.hueChange = new EventEmitter();
    this.lightnessChange = new EventEmitter();
    this.saturationChange = new EventEmitter();
    this.opacityChange = new EventEmitter();
    this.colorChange = new EventEmitter();
  }

  ngOnInit() {
    this.generateGradients();
  }

  private selectedColor = {};
  @Output()
  private hueChange: EventEmitter<number>;
  @Output()
  private saturationChange: EventEmitter<number>;
  @Output()
  private lightnessChange: EventEmitter<number>;
  @Output()
  private opacityChange: EventEmitter<number>;
  @Output()
  private colorChange: EventEmitter<{}>;

  private _hue: number = 120;

  public get hue(): number {
    return this._hue;
  }
  @Input()
  public set hue(v: number) {
    this._hue = Math.min(Math.max(v, 1), 360);
    this.hueChange.emit(this._hue);
    this.onColorChange();
    this.generateGradients();
  }

  private _saturation: number = 90;
  public get saturation(): number {
    return this._saturation;
  }
  @Input()
  public set saturation(v: number) {
    this._saturation = Math.min(Math.max(v, 0), 100);
    this.saturationChange.emit(this._saturation);
    this.onColorChange();
    this.generateGradients();
  }


  private _lightness: number = 20;
  public get lightness(): number {
    return this._lightness;
  }
  @Input()
  public set lightness(v: number) {
    this._lightness = Math.min(Math.max(v, 0), 100);
    this.lightnessChange.emit(this._lightness);
    this.onColorChange();
    this.generateGradients();
  }

  public get opacity(): number {
    return this._alpha / 100;
  }
  @Input()
  public set opacity(v: number) {
    this._alpha = Math.min(Math.max(v, 0), 1) * 100;
    this.generateGradients();
  }


  @Input()
  public set fromRgb(v: string | rgba) {
    let value;
    if (typeof v === 'string') {
      value = JSON.parse(v);
    }
    else value = v;
    try {
      let r = parseInt((value as any).r);
      let g = parseInt((value as any).g);
      let b = parseInt((value as any).b);
      if (isNaN(r) || isNaN(g) || isNaN(b)) {
        throw new Error('R, G or B is NaN!')
      }
      let hsl = HslRgbService.rgb2Hsl(r, g, b);
      this.hue = hsl.h;
      this.lightness = hsl.l;
      this.saturation = hsl.s;
    }
    catch (ex) {
      console.error('Error converting RGB to HSL! ' + ex);
    }
  }





  private _alpha: number = 50;
  private get alpha(): number {
    return this._alpha;
  }
  private set alpha(v: number) {
    this._alpha = v;
    this.opacityChange.emit(this._alpha / 100);
    this.onColorChange();
    this.generateGradients();
  }


  private onColorChange = () => {
    let rgba = HslRgbService.hsl2Rgb(this._hue, this._saturation, this._lightness);
    rgba.a = this._alpha / 100;
    this.colorChange.emit(
      {
        hsla: {
          h: this._hue,
          s: this._saturation,
          l: this._lightness,
          a: this._alpha / 100
        },
        rgba: rgba,
        hex: HslRgbService.rgb2Hex(rgba.r, rgba.g, rgba.b),
        opacity: this.alpha / 100
      });
  }

  private huesGradient;
  private lightnessGradient;
  private saturationGradient;
  private alphaGradient;

  private generateGradients() {
    this.huesGradient = GradientService.huesGradient(this.saturation, this.lightness, this.alpha / 100);
    this.lightnessGradient = GradientService.lightnessGradient(this.hue, this.saturation, this.alpha / 100);
    this.saturationGradient = GradientService.saturationGradient(this.hue, this.lightness, this.alpha / 100);
    this.alphaGradient = GradientService.alphaGradient(this.hue, this.saturation, this.lightness);
    this.selectedColor = { 'background': `hsla(${this.hue},${this.saturation}%,${this.lightness}%,${this.alpha / 100})` }
  }


}
