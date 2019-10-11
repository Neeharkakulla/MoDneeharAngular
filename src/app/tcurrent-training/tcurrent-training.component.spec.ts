import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcurrentTrainingComponent } from './tcurrent-training.component';

describe('TcurrentTrainingComponent', () => {
  let component: TcurrentTrainingComponent;
  let fixture: ComponentFixture<TcurrentTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcurrentTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcurrentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
