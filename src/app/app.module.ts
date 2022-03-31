import { ProcessComponent } from './process/process.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SuperClaimComponent } from './super-claim/super-claim.component';
import { InsuredDetailsComponent } from './insured-details/insured-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { ContactsActionsComponent } from './contacts-actions/contacts-actions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PhonePipe } from './phone-number-pipe';





@NgModule({
  declarations: [
    AppComponent,
    ProcessComponent,
    SuperClaimComponent,
    InsuredDetailsComponent,
    ContactsActionsComponent,
    ContactsComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
