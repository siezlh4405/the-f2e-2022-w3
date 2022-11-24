import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumTestComponent } from './scrum-test.component';

describe('ScrumTestComponent', () => {
  let component: ScrumTestComponent;
  let fixture: ComponentFixture<ScrumTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
