import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumMemberComponent } from './scrum-member.component';

describe('ScrumMemberComponent', () => {
  let component: ScrumMemberComponent;
  let fixture: ComponentFixture<ScrumMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
