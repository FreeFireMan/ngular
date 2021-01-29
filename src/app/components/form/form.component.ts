import * as uuid from 'uuid';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FORMS_CONSTANTS} from '../form.constans';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  forms = FORMS_CONSTANTS;
  myForm: FormGroup;
  visitors = [];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  saveFormData(form): void {
    console.log(form);
    const visitorData = {id: uuid.v4(), ...form.value};
    this.visitors.push(visitorData);
    this.myForm.reset();
  }

}
