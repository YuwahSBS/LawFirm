import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact.service';

import { SharedService } from 'src/app/shared/shared/shared.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AccordionItems } from 'src/assets/data/accordion/accordion-menu';
import { FAQService } from 'src/app/services/faq.service';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() title!: string;
  @Input() content!: string;
  hide: boolean = false
  isOpen = false;
  accordionItems: any = []
  submitted = false;
  loading = false
  currentYear: any = ''
  promotionData: any = []



  constructor(public shareService: SharedService, private FAQService: FAQService, private promotionService: PromotionService) {

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
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
        items: 3
      },
      1000: {
        items: 3
      }
    },
    nav: false
  }

  homebanner: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 1000,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };

  // activeSlideIndex: number = 0;
  // carouselInitialized(event: any) {
  //   // Set the initial active slide index to 0
  //   // this.activeSlideIndex = event.target.current();
  // }

  // carouselSlideChanged(event: any) {
  //   // Update the active slide index when the slide changes
  //   // this.activeSlideIndex = event.target.current();
  // }

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  goRoute(route: string) {
    this.shareService.router.navigate(['/' + route])
  }


  goSection(route: any) {
    const element = document.getElementById(route) as HTMLElement;
    element.scrollIntoView();
  }


  ngOnInit(): void {
    // this.getCurrentYear()

    // this.promotionData = this.shareService.promotionData
    // this.accordionItems = this.shareService.accordionItems 
    

  }


  getCurrentYear() {
    let date = new Date()
    this.currentYear = date.getFullYear()
  }

  scroll(el: any) {
    el.scrollIntoView({behavior:"smooth"});
  }





}


