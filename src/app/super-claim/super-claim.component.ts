import { IContactPerson } from './../models/icontact-person';
import { Subscription } from 'rxjs';
import { injuryType, claimCause, personType, submitionMethod, superClaimType } from './../../assets/data/lists';
import { Iinsured } from '../models/iinsured';
import { Actions } from './../actions.enum';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Console } from 'console';



@Component({
  selector: 'app-super-claim',
  templateUrl: './super-claim.component.html',
  styleUrls: ['./super-claim.component.css']
})
export class SuperClaimComponent implements OnInit,OnDestroy {

  superClaimTypes = superClaimType;
  injuryTypes = injuryType;
  claimCauses = claimCause;
  PersonTypes = personType
  submitionMethods = submitionMethod;
  form: FormGroup;

  subscription: Subscription;
  @Input() parentForm: FormGroup;
  @Input() controlName;
  @Input() insured: Iinsured ;
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {

    this.form = this.fb.group({
      superClaimType: ['', Validators.required],
      injuryDate: ['', Validators.required],
      claimCause: ['', Validators.required],
      injuryType :[''],
      submittedBy: ['', [Validators.required,this.submittedByValidation]],
      submitionMethod: []});

    this.parentForm.addControl(this.controlName,this.form);

    this.subscription = this.form.get('claimCause').valueChanges.subscribe(val => {
      if (val) {
        this.form.controls['injuryType'].setValidators([Validators.required]);
      } else {
        this.form.controls['injuryType'].clearValidators();
      }
      this.form.controls['injuryType'].updateValueAndValidity();
    });

  }

  submittedByValidation = (control: FormControl)=>{
    if (!control.value) {return null;}
    return (this.parentForm.get('contactPersons')?.value||[])
          .find((c: IContactPerson)=>c.type == control.value)? null
          : {'inValid': 'חייב להיות איש קשר מאותו הסוג'}
  }
  get claimCause()
  {
    return this.form.get('claimCause')?.value;
  }
  get submittedByErrMsg(){
    return this.form.get('submittedBy')?.getError('inValid')||'';
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
