import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormDTO} from './datamodels/formDTO';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://questionnaire-back.herokuapp.com/forms';
  }
  addForm(formDTO: FormDTO) {
    // this.httpClient.post(this.urlGet,employee).subscribe(
    //   (value) => {console.log('Received value: ',value)},
    //   (error) => {console.log('Error!!',error)},
    //   ()=>{console.log('end of values')});
    return this.httpClient.post(this.baseUrl, formDTO);
  }
}
