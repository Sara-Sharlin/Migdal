import { IContactPerson } from './../models/icontact-person';
import { Iinsured } from './../models/iinsured';
import { Actions } from './../actions.enum';
import { ProcessService } from './../process.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators,ReactiveFormsModule, Form, ValidatorFn, AbstractControl, MaxLengthValidator } from '@angular/forms';
import { IProcess } from '../models/iprocess';
import { superClaimStatus } from '../../assets/data/lists'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {


  process: IProcess;

  addInsuredSubject: Subject<Iinsured> = new Subject<Iinsured>();
  clearSubject: Subject<any> = new Subject<any>();

  mainForm: FormGroup;
  constructor(private _processService: ProcessService,
              private fb:FormBuilder) {
     }

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      contactPersons: ['']
    });
    this._processService.getProcess()
        .subscribe(data =>
          {
            this.process=data;
            this.mainForm.patchValue(data);
          });

  }
  get superClaimNum(): number
  {
    return this.process?.superClaim.superClaimNum;
  }
  get processStatusDesc(): string
  {
    return superClaimStatus.find(s => s.code ==
      this.process?.superClaim.superClaimStatus)?.value;
  }

  get actions()
  {return Actions;}

  reset() {
    this.mainForm.reset();
    this.clearSubject.next(null);
  }

  get contactsCount():number
  {
    return this.process?.contactPersons?.length||0;
  }

  get contsctsErrorMsg(){
    return this.mainForm.get('contactPersons')?.getError('inValid')||'';
  }

  next()
  {
    console.log(this.mainForm.getRawValue());
  }
  contactsActions(val): void{
    const contacts: AbstractControl = this.mainForm.get('contactPersons');
    switch (val)
    {
      case Actions.RESET:
        let c: IContactPerson[] = contacts.value||[];
        c = c?.filter(p => p.deliveryFlag);
        contacts.setValue(c);
        break;
      case Actions.RESET_ALL:
        contacts.setValue([]);
        break;
      case Actions.ADD_INSUER:
        this.addInsuredSubject.next(this.process.insured);
        break;
    }
  }
}
