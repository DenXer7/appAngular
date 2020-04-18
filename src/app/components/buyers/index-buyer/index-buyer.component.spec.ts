import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBuyerComponent } from './index-buyer.component';

describe('IndexBuyerComponent', () => {
  let component: IndexBuyerComponent;
  let fixture: ComponentFixture<IndexBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
