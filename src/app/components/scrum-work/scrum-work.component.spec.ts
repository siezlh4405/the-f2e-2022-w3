import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumWorkComponent } from './scrum-work.component';

describe('ScrumWorkComponent', () => {
  let component: ScrumWorkComponent;
  let fixture: ComponentFixture<ScrumWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
