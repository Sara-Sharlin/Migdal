import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperClaimComponent } from './super-claim.component';

describe('SuperClaimComponent', () => {
  let component: SuperClaimComponent;
  let fixture: ComponentFixture<SuperClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
