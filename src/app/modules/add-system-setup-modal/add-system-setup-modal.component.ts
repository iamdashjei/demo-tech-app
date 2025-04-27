import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SystemSetup } from '../../core/models/system-setup.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-system-setup-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-system-setup-modal.component.html',
  styleUrl: './add-system-setup-modal.component.scss',
  standalone: true,
})
export class AddSystemSetupModalComponent {
  @Output() setupAddedEvent = new EventEmitter<SystemSetup>();

  setup: SystemSetup = {
    id: 0,
    name: '',
    baseUrl: '',
    authenticationMethod: '',
    key: '',
    value: '',
    authenticationPlace: 'Header',
  }

  constructor(public activeModal: NgbActiveModal) {}

  closeModal(): void {
    this.activeModal.dismiss('Cancel Click');
  }

  onSubmit(form: NgForm): void {
    
    if (form.valid) {
      this.setupAddedEvent.emit(this.setup);
      this.setup = {
        id: 0,
        name: '',
        baseUrl: '',
        authenticationMethod: '',
        key: '',
        value: '',
        authenticationPlace: '',}
      }
      this.activeModal.close('Save Click');
  }

}
