import { Component, OnInit } from '@angular/core';
import { IInfoImage } from 'src/app/interfaces/IInfoImage.interface';
import { IProductCarousel } from 'src/app/interfaces/IProductCarousel.interface';
import { ITitleSection } from 'src/app/interfaces/ITitleSection.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titleCatProd:ITitleSection = {
    title: 'Categoría de productos',
    subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea sequi, reiciendis voluptate minima.',
    style: 'container-fluid p-3 text-center',
    styleTitle:'rbt700 mt-3 mb-2',
    styleSubtitle:'rbt300 font3 mt-3 mb-5',
  }

  titleNewProd:ITitleSection = {
    title: 'Nuevos productos',
    subtitle: 'Conoce nuestra nueva colección',
    style: 'container-fluid p-3',
    styleTitle:'rbt700 mt-3 mb-2',
    styleSubtitle:'rbt300 font3 mt-3 mb-5',
  }

  titleTopSales:ITitleSection = {
    title: 'Top Ventas',
    subtitle: 'No podrás dejarlos escapar',
    style: 'container-fluid p-3',
    styleTitle:'rbt700 mt-3 mb-2',
    styleSubtitle:'rbt300 font3 mt-3 mb-5',
  }


  infoImageStep1:IInfoImage = {
    img: "../../assets/info-images/3.jpg",
    title: "Una nueva forma de cuidarte",
    firstParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    secondParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    button: false,
    flexReverse:true,
  }

  SlideOne: IProductCarousel = {
    showNavigationArrows: true,
    showNavigationIndicators: true,
    keyboard: true,
    pauseOnHover: true,
    wrap: true,
    activeId: 'one',
    oneProduct: false,
  };

  SlideTwo: IProductCarousel = {
    showNavigationArrows: false,
    showNavigationIndicators: true,
    keyboard: true,
    pauseOnHover: true,
    wrap: true,
    activeId: 'two',
    oneProduct: false,
  };
  
  SlideThree: IProductCarousel = {
    showNavigationArrows: true,
    showNavigationIndicators: false,
    keyboard: true,
    pauseOnHover: true,
    wrap: true,
    activeId: 'three',
    oneProduct: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
