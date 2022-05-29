import { Component, OnInit } from '@angular/core';
import { IInfoImage } from 'src/app/interfaces/IInfoImage.interface';

@Component({
  selector: 'app-facial',
  templateUrl: './facial.component.html',
  styleUrls: ['./facial.component.scss']
})
export class FacialComponent implements OnInit {

  infoImageStep1:IInfoImage = {
    img: '../../../../assets/services/facial/facial1.jpg',
    title: "INDIBA Facial",
    firstParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    secondParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    button: false,
    flexReverse:true,
  }
  infoImageStep2:IInfoImage = {
    img: '../../../../assets/services/facial/facial2.jpg',
    title: "Limpieza facial oxigenante",
    firstParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    secondParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    button: false,
    flexReverse:false,
    background: true,
  }
  infoImageStep3:IInfoImage = {
    img: '../../../../assets/services/facial/facial3.webp',
    title: "Terapia facial relajante",
    firstParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    secondParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    button: false,
    flexReverse:true,
    background: false,
  }
  infoImageStep4:IInfoImage = {
    img: '../../../../assets/services/facial/facial4.webp',
    title: "Medicina estética facial",
    firstParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    secondParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    button: false,
    flexReverse:false,
    background: true,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
