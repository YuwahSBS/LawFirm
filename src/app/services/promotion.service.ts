import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared/shared.service';

@Injectable({
  providedIn: 'root',
})

export class PromotionService {

  constructor(private shared_: SharedService) {
  }

  getAllPromotions(param: any) {
    return this.shared_.postRequest('GetAllPromotion', param);
  }


  getSinglePromotion(param: any) {
    return this.shared_.postRequest('GetPrmotionDetail', param);
  }
}