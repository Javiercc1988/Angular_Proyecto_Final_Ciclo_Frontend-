import { Component, Input, OnInit } from '@angular/core';
import { ITitleSection } from 'src/app/interfaces/ITitleSection.interface';

@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.scss'],
})
export class TitleSectionComponent implements OnInit {
  @Input() titleSection: ITitleSection = {
    title: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
