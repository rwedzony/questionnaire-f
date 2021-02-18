import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-bottom-container',
  templateUrl: './bottom-container.component.html',
  styleUrls: ['./bottom-container.component.scss']
})
export class BottomContainerComponent implements OnInit {


  isLinear = false;
  // @ts-ignore
  firstFormGroup: FormGroup;
  // @ts-ignore
  secondFormGroup: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder) {}

  // tslint:disable-next-line:typedef
  selected: any;
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstGroupCtrl1: ['', Validators.required],
      firstGroupCtrl2: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondGroupCtrl: ['', Validators.required]
    });
  }
}
