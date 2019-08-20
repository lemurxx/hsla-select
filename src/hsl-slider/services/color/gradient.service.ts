import { Injectable } from '@angular/core';

@Injectable()
export class GradientService {

  public static saturationGradient = (hue, lightness, alpha) => {
    return {
      background: `linear-gradient(to right, hsla(${hue},0%,${lightness}%,${alpha}) 0%,hsla(${hue},100%,${lightness}%,${alpha}) 100%)`
    }
  };

  public static lightnessGradient = (hue, saturation, alpha) => {
    return {
      background: `linear-gradient(to right, hsla(${hue},0${saturation}%,0%,${alpha}) 0%,hsla(${hue},${saturation}%,50%,${alpha}) 50%,hsla(${hue},${saturation}%,100%,${alpha}) 100%)`
    }
  };

  public static huesGradient = (saturation, lightness, alpha) => {
    return {
      background: `linear-gradient(to right, hsla(0,${saturation}%,${lightness}%,${alpha}) 0%,hsla(60,${saturation}%,${lightness}%,${alpha}) 17%,hsla(120,${saturation}%,${lightness}%,${alpha}) 34%,hsla(180,${saturation}%,${lightness}%,${alpha}) 50%,hsla(240,${saturation}%,${lightness}%,${alpha}) 67%,hsla(300,${saturation}%,${lightness}%,${alpha}) 84%,hsla(0,${saturation}%,${lightness}%,${alpha}) 100%)`
    }
  };
  public static alphaGradient = (hue, saturation, lightness) => {
    return {
      background: `linear-gradient(to right, hsla(${hue},${saturation}%,${lightness}%,0) 0%,hsla(${hue},${saturation}%,${lightness}%,1) 100%)`
    }
  };


}
