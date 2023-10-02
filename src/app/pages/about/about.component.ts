import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  vision : boolean = true
  mission : boolean = false
  value : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: false,
    dots: true,
    navSpeed: 600,
    margin: 10,
    // navText: ['&#8249', '&#8250;'],
    navText: [
      '<img src="assets/images/is-less-than.png" width="40px" alt="">',
      ' <img src="assets/images/is-greater-than.png" width="40px" alt="">'
    ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 4
      },
      1000: {
        items: 4
      }
    },
    nav: false
  }

  tabClick(param : any){
    if(param == 'vision'){
      this.vision = true
      this.mission = false
      this.value = false
    }
    if(param == 'mission'){
      this.mission = true
      this.value = false
      this.vision = false
    }
    if(param == 'value'){
      this.value = true
      this.vision = false
      this.mission = false
    }
  }


}
