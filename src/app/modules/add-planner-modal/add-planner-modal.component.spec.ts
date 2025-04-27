import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlannerModalComponent } from './add-planner-modal.component';

describe('AddPlannerModalComponent', () => {
  let component: AddPlannerModalComponent;
  let fixture: ComponentFixture<AddPlannerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlannerModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlannerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
