
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared/shared/shared.service';
import { SurveyService } from 'src/app/services/survey.service';
import { Title } from '@angular/platform-browser';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {
  form!: FormGroup;
  labelselected: boolean = false;
  submitted = false;
  loading: boolean = false;
  responseResult: string = '';
  submittedSuccessfully = false;

  constructor(private title: Title, private formBuilder: FormBuilder,
    public shared_: SharedService,
    private surveyService: SurveyService,
    private elementRef: ElementRef) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone_no: ['', [Validators.required]],
      // Validators.pattern('^[0-9]{11}$')
      person_by: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
  }
  onEnquiry() {
    this.loading = true;
    this.submitted = true;
    if (this.form.invalid) {
      this.loading = false;
      return;

    }


    let param = {
      survey_id: '',
      name: this.f['name'].value,
      ph_no: this.f['phone_no'].value,
      person_by: this.f['person_by'].value,
      duration: this.f['duration'].value,
      address: this.f['address'].value,
      RequestID: '1'
    };

    // console.log(param, 'paramdata')

    this.surveyService
      .saveSurvey(param)
      .toPromise()
      .then((response: any) => {
        let responseID = response.d;
        this.responseResult = responseID.split('~')[1];
        this.shared_.toastrService.success('Your Form Submitted Successfully');
        this.form.reset();
        this.submitted = false;
        this.closeSurveyForm();

      })
      .catch((error: any) => {
        // console.log('error');
      });


  }
  closeSurveyForm() {
    this.shared_.closeSurvey();
  }
  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
  sendMessage() {
    this.loading = false
    setTimeout(() => {
      this.loading = false;
    }, 2000);

  }
  selectOne(mother: any) {
    this.labelselected = true;
  }
  selectTwo(baby: any) {
    this.labelselected = false;
  }
  // isMotherSelected = false;
  // duration= 'Age';

  // updateLabel() {
  //   if (this.isMotherSelected){
  //     this.duration = 'Pregnant months';
  //   } else {
  //     this.duration= 'Age';
  //    this.isMotherSelected = true;
  //   }
  // }

}
