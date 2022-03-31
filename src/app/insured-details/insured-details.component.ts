import { Iinsured } from '../models/iinsured';
import { Component, Input, OnInit } from '@angular/core';
import { identityType } from '../../assets/data/lists'

@Component({
  selector: 'app-insured-details',
  templateUrl: './insured-details.component.html',
  styleUrls: ['./insured-details.component.css']
})
export class InsuredDetailsComponent implements OnInit {

  @Input() insured: Iinsured;
  constructor() { }

  ngOnInit(): void {

  }
  get name(): string
  {
    return this.insured?.firstName + ' ' + this.insured?.lastName;
  }
  get idType(): string
  {
    return identityType?.find(i => i.code === this.insured?.identityType)?.value;
  }

}
