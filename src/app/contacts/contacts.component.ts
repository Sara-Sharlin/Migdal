import { Iinsured } from './../models/iinsured';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { personType } from '../../assets/data/lists';
import { IContactPerson } from '../models/icontact-person';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ContactsComponent,
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: ContactsComponent,
    multi: true
  }
]
})
export class ContactsComponent implements OnInit,ControlValueAccessor,OnDestroy {

  contacts: IContactPerson[];
  form: FormGroup;
  added = true;
  onChange;
  onTouched;

  private eventSubscription: Subscription;
  @Input() addInsured: Observable<Iinsured>;
  @Input() clearForm: Observable<any>;

  personTypes = personType;
  constructor(private fb: FormBuilder) { }


  writeValue(value): void {
    this.contacts = value || [];
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      deliveryFlag:[],
      name:  ['', [Validators.required, Validators.pattern(/^[א-ת\s]+$/)]],
      type:  ['', Validators.required],
      address:[],
      phoneNumber:  ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', Validators.email]
    });
    this.eventSubscription = this.addInsured.subscribe((insured: Iinsured) =>
    {
      if (insured == null) { return; }
      const contact: IContactPerson =
      {
          name : insured.firstName + ' ' + insured.lastName,
          id : insured.identity,
          deliveryFlag : false,
          phoneNumber : null,
          type: 1,
          email : null,
          address : insured.address?.streetName + ' ' + insured.address?.cityName
      };

      this.added = false;
      this.form.patchValue(contact);
    });
    this.eventSubscription.add(this.clearForm.subscribe(() => {
      this.form.reset();
    }));
  }
  validate({ value }: FormControl) {
    return this.contacts.find(c => c.deliveryFlag) ?
      null : { inValid: 'חובה לבחור איש קשר מועדף' };
  }
  get displayButton()
  {return this.added;}

  addContact(): void{
    this.contacts.push(this.form.value);
    this.form.reset();
    this.added = true;
    this.onChange(this.contacts);
	  this.onTouched();
  }
  change(): void
  {
    this.onChange(this.contacts);
    this.onTouched();
  }
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

}

