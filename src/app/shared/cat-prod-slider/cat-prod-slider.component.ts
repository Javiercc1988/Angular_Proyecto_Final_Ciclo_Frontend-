import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-prod-slider',
  templateUrl: './cat-prod-slider.component.html',
  styleUrls: ['./cat-prod-slider.component.scss'],
})
export class CatProdSliderComponent implements OnInit {
  slideData: string[] = 
  [
    '../../assets/catProdSlide/catProdSlide_1.jpg',
    '../../assets/catProdSlide/catProdSlide_2.jpg',
    '../../assets/catProdSlide/catProdSlide_3.jpg',
    '../../assets/catProdSlide/catProdSlide_2.jpg',
    '../../assets/catProdSlide/catProdSlide_3.jpg',
    '../../assets/catProdSlide/catProdSlide_1.jpg',
    '../../assets/catProdSlide/catProdSlide_2.jpg',
    '../../assets/catProdSlide/catProdSlide_3.jpg',
    '../../assets/catProdSlide/catProdSlide_1.jpg',
  ];

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  index: number = 0;

  constructor() {}

  ngOnInit(): void {}

  next() {
    this.index ++;
    console.log(this.index, this.slideData.length)
  }

  prev() {
    this.index --;
  }
}
