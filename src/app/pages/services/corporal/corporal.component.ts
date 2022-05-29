import { Component, OnInit } from '@angular/core';
import { IInfoImage } from 'src/app/interfaces/IInfoImage.interface';

@Component({
  selector: 'app-corporal',
  templateUrl: './corporal.component.html',
  styleUrls: ['./corporal.component.scss']
})
export class CorporalComponent implements OnInit {
  
  infoImageStep1:IInfoImage = {
    img: '../../../../assets/services/corporal/corporal1.jpg',
    title: "INDIBA Corporal",
    firstParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    secondParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    button: false,
    flexReverse:true,
  }
  infoImageStep2:IInfoImage = {
    img: '../../../../assets/services/corporal/corporal2.jpg',
    title: "Maderoterapia drenante",
    firstParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    secondParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    button: false,
    flexReverse:false,
    background: true,
  }
  infoImageStep3:IInfoImage = {
    img: '../../../../assets/services/corporal/corporal3.jpg',
    title: "Masaje descontracturante",
    firstParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    secondParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    button: false,
    flexReverse:true,
    background: false,
  }
  infoImageStep4:IInfoImage = {
    img: '../../../../assets/services/corporal/corporal4.jpg',
    title: "Masajes terapéuticos relajantes",
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
