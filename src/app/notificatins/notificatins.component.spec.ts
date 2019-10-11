import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificatinsComponent } from './notificatins.component';

describe('NotificatinsComponent', () => {
  let component: NotificatinsComponent;
  let fixture: ComponentFixture<NotificatinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificatinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificatinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
