import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumIntroComponent } from './scrum-intro.component';

describe('ScrumIntroComponent', () => {
  let component: ScrumIntroComponent;
  let fixture: ComponentFixture<ScrumIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
