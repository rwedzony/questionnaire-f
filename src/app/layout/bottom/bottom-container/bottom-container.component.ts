import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormDTO} from '../../../datamodels/formDTO';
import {MatDatepicker} from '@angular/material/datepicker';
import {ToastrService} from 'ngx-toastr';
import {FormService} from '../../../form.service';


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
              private toastr: ToastrService,
              private formService: FormService) {
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
    if (this.formDTO.first_name === '' || this.date === null){
      this.toastr.error("first name and birthday cannot be blank!","Error",{
        timeOut: 2000,
        positionClass: 'toast-top-center',
      });
    }
    else if(this.formDTO.first_name.length > 20)
    {
      this.toastr.error("first name cannot be longer than 20 characters!","Error",{
        timeOut: 2000,
        positionClass: 'toast-top-center',
      });
      this.formDTO.first_name = '';
    }
    else if(this.formDTO.something_about.length > 140)
    {
      this.toastr.error("something_about section cannot be longer than 140git characters!","Error",{
        timeOut: 2000,
        positionClass: 'toast-top-center',
      });
      this.formDTO.something_about = '';
    }
    else
      {
        this.formDTO.birth_date = this.date.toLocaleDateString();
        this.formService.addForm(this.formDTO).subscribe(
          (value) => {
            this.toastr.success("Your form was Successfully Submitted!","Success",{
              timeOut: 2000,
              positionClass: 'toast-top-center',
            });
            this.date = new Date();
            this.formDTO.first_name = '';
            this.formDTO.birth_date = '';
            this.formDTO.os = '';
            this.formDTO.something_about = '';
            },
          (error) => {
            this.toastr.error("Connection Error during sending form.","Error",{
              timeOut: 2000,
            });
          });
    }
  }
}
