import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSellerComponent } from './index-seller.component';

describe('IndexSellerComponent', () => {
  let component: IndexSellerComponent;
  let fixture: ComponentFixture<IndexSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
