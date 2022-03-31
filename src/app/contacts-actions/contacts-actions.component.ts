import { Actions } from './../actions.enum';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contacts-actions',
  templateUrl: './contacts-actions.component.html',
  styleUrls: ['./contacts-actions.component.css']
})
export class ContactsActionsComponent implements OnInit {

  @Input() contactsCount: number;
  @Output() actionEvent = new EventEmitter<Actions>();

  constructor() { }

  ngOnInit(): void {
  }
  action(type: Actions): void
  {
    this.actionEvent.emit(type);
  }
  get actions(): any
  {
    return Actions;
  }

}
