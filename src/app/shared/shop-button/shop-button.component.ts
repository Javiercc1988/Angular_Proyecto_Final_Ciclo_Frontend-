import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-button',
  templateUrl: './shop-button.component.html',
  styleUrls: ['./shop-button.component.scss']
})
export class ShopButtonComponent implements OnInit {


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateto(){
    this.router.navigate(['/products'])
  }

}
