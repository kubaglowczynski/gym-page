import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivesectionComponent } from './livesection.component';

describe('LivesectionComponent', () => {
  let component: LivesectionComponent;
  let fixture: ComponentFixture<LivesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivesectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
