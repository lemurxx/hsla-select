import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private hue = 355;
  private saturation = 60;
  private lightness = 40;
  private opacity = 1;
  private saturation1
  private hue1;
  private lightness1;
  private opacity1 = .5;
  private rgb = {
    r : 0, 
    g: 100,
    b: 0
  }
  private rgbStr = '{"r":100, "g": 0, "b": 100}';
  private color;

  private colorChanged(color) {
    this.color = color;
  }
}




/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/