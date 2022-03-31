import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsActionsComponent } from './contacts-actions.component';

describe('ContactsActionsComponent', () => {
  let component: ContactsActionsComponent;
  let fixture: ComponentFixture<ContactsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
