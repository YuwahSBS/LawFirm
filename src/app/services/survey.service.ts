import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared/shared.service';
import { Survey } from '../DTO/survey.dto';

@Injectable({
  providedIn: 'root',
})

export class SurveyService {

  constructor(private shared_: SharedService) {
  }

  public saveSurvey(param: any) {
    return this.shared_.postRequest('SaveSurvey', param);
  }


  
}