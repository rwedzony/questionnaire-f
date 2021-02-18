import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormDTO} from '../../../datamodels/formDTO';
import {MatDatepicker} from '@angular/material/datepicker';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-bottom-container',
  templateUrl: './bottom-container.component.html',
  styleUrls: ['./bottom-container.component.scss']
})
export class BottomContainerComponent implements OnInit {
  formDTO: FormDTO;
  // @ts-ignore
  firstFormGroup: FormGroup;
  // @ts-ignore
  secondFormGroup: FormGroup;
  // @ts-ignore
  thirdFormGroup: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder,
              private toastr: ToastrService) {
    this.formDTO = {first_name: '', birth_date: '', os: '', something_about: ''};
    this.date = new Date();

  }

  // tslint:disable-next-line:typedef
  selected: any;
  date: Date;
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstGroupCtrl1: ['', Validators.required],
      firstGroupCtrl2: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondGroupCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdGroupCtrl: ['', '']
    });
  }
  submitForm() {
    this.toastr.success("You are Logged in!","Success",{
      positionClass: 'toast-top-center',timeOut:2000,
    });
    if (this.formDTO.first_name === '' || this.date === null){
      alert('first name or birthdate cannot be blank!');
    }
    else if(this.formDTO.first_name.length > 10)
    {
      alert('First name must not be longer, than 10 characters!!!')
      this.formDTO.first_name = '';
    }
    else
      {
    this.formDTO.birth_date = this.date.toLocaleDateString();
    alert(this.formDTO.first_name + ' ' + this.formDTO.birth_date + ' ' + this.formDTO.os + ' ' + this.formDTO.something_about + ' ');
    this.date = new Date();
    this.formDTO.first_name = '';
    this.formDTO.birth_date = '';
    this.formDTO.os = '';
    this.formDTO.something_about = '';
    }
  }
}
