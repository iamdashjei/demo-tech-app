import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Consumer } from '../../core/models/consumer.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-planner-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-planner-modal.component.html',
  styleUrl: './add-planner-modal.component.scss',
  standalone: true,
})
export class AddPlannerModalComponent {
  @Output() plannerAddedEvent = new EventEmitter<Consumer>();

  planner: Consumer = {
    name: '',
    description: '',
    plannerType: '',
    systemSetupId: null,
    fund: [],
    trigger: '',
  }

  constructor(public activeModal: NgbActiveModal) {}

  closeModal(): void {
    this.activeModal.dismiss('Cancel Click');
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.plannerAddedEvent.emit(this.planner);
      this.planner = { name: '', description: '', plannerType: '', systemSetupId: null, fund: [],  trigger: ''};
      this.activeModal.close('Save Click');
    }
  }
}
