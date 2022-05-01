import { Component, OnInit } from '@angular/core';
import { IInfoImage } from 'src/app/interfaces/IInfoImage.interface';
import { ITopSectionBanner } from 'src/app/interfaces/ITopBanner.interface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  topAboutUs: ITopSectionBanner = {
    banner: 'aboutUs-image-background',
    title: 'Nosotros',
    subtitle: 'Home > Nosotros'
  };

  infoImageCard1: IInfoImage = {
    img: "../../assets/info-images/boss.png",
    title: 'La innovación es lo que distingue al líder de los seguidores',
    firstParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    secondParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum.",
    button: false,
    flexReverse:true,
    littlePadding: true,
    signature: true,
  }



  constructor() {}

  ngOnInit(): void {}
}
