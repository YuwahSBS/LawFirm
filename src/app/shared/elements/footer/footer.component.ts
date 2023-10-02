import { Component, OnInit } from '@angular/core';
import { MenuList } from 'src/assets/data/menu/menu';
import { SharedService } from '../../shared/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number | undefined
  adminLinkUrl: string = environment.adminLinkUrl

  constructor(private shareService: SharedService) { }


  ngOnInit(): void {
    this.currentYear = ((new Date()).getFullYear())
  }

  goRoute(route: string) {
    this.shareService.router.navigate(['/' + route])
  }

}
