import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtechnologyComponent } from './newtechnology.component';

describe('NewtechnologyComponent', () => {
  let component: NewtechnologyComponent;
  let fixture: ComponentFixture<NewtechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
