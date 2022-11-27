import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumToolComponent } from './scrum-tool.component';

describe('ScrumToolComponent', () => {
  let component: ScrumToolComponent;
  let fixture: ComponentFixture<ScrumToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
