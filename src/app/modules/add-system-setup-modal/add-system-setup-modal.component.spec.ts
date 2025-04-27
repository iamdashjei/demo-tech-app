import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSystemSetupModalComponent } from './add-system-setup-modal.component';

describe('AddSystemSetupModalComponent', () => {
  let component: AddSystemSetupModalComponent;
  let fixture: ComponentFixture<AddSystemSetupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSystemSetupModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSystemSetupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
