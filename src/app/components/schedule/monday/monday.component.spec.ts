import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MondayComponent } from './monday.component';

describe('MondayComponent', () => {
  let component: MondayComponent;
  let fixture: ComponentFixture<MondayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MondayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MondayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
