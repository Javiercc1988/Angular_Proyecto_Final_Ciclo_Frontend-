import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  images = [
    '../../assets/sliderDocs/slider1.jpg',
    '../../assets/sliderDocs/slider2.jpg',
    '../../assets/sliderDocs/slider3.jpg',
  ];

  // ../../assets/sliderDocs/slider3.jpg
  constructor() {}

  ngOnInit(): void {}
}
