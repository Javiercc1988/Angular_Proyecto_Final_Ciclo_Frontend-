import { Component, Input, OnInit } from '@angular/core';
import { IInfoImage } from 'src/app/interfaces/IInfoImage.interface';

@Component({
  selector: 'app-info-image-button',
  templateUrl: './info-image-button.component.html',
  styleUrls: ['./info-image-button.component.scss']
})
export class InfoImageButtonComponent implements OnInit {

  @Input() infoImage:IInfoImage = {
    img: "../../assets/info-images/2.jpg",
    title: "Siente la autentica experiencia",
    firstParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    secondParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    button: true,
    flexReverse:false,
    littlePadding: false,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
