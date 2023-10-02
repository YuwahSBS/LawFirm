import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../elements/nav-bar/nav-bar.component';
import { FooterComponent } from '../elements/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ModalAnnouncememtComponent } from 'src/app/elements/modal-announcememt/modal-announcememt.component';
import { SurveyFormComponent } from 'src/app/elements/survey-form/survey-form.component';
import { SafePipe } from 'src/app/pipe/safe.pipe';

@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    ModalAnnouncememtComponent,
    SurveyFormComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    ModalAnnouncememtComponent,
    SurveyFormComponent,
    TranslateModule,
    SafePipe
  ]
})
export class SharedModule { }
