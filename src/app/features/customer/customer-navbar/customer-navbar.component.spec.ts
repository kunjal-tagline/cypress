import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNavbarComponent } from 'src/app/features/customer/customer-navbar/customer-navbar.component';

describe('CustomerNavbarComponent', () => {
  let component: CustomerNavbarComponent;
  let fixture: ComponentFixture<CustomerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
