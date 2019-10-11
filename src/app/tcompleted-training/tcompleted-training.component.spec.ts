import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcompletedTrainingComponent } from './tcompleted-training.component';

describe('TcompletedTrainingComponent', () => {
  let component: TcompletedTrainingComponent;
  let fixture: ComponentFixture<TcompletedTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcompletedTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcompletedTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
