import { Component, OnInit } from '@angular/core';
import { IInfoImage } from 'src/app/interfaces/IInfoImage.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  infoImageStep1:IInfoImage = {
    img: "../../assets/info-images/3.jpg",
    title: "Una nueva forma de cuidarte",
    firstParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    secondParagraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita soluta cum, reprehenderit tenetur tempora itaque voluptatum. Ipsam, maiores ipsum. Cum consectetur eveniet ex quod nihil quos deleniti fugiat ullam dolorum.",
    button: false,
    flexReverse:true,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
