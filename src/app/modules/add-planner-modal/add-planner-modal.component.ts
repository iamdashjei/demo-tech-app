import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Consumer } from '../../core/models/consumer.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SystemSetupService } from '../../core/services/system-setup.service';
import { SystemSetup } from '../../core/models/system-setup.model';

@Component({
  selector: 'app-add-planner-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-planner-modal.component.html',
  styleUrl: './add-planner-modal.component.scss',
  standalone: true,
})
export class AddPlannerModalComponent {
  @Output() plannerAddedEvent = new EventEmitter<Consumer>();

  private systemSetupService = inject(SystemSetupService);

  systemSetups: SystemSetup[] = [];
  loadingConfigs: boolean = false;
  errorMessage: string = '';
  selectedProductConfigId: number | null = null;

  planner: Consumer = {
    id: 0,
    name: '',
    description: '',
    plannerType: '',
    systemSetupId: null,
    fund: [],
    trigger: [],
  };

  ngOnInit(): void {
    this.loadSystemSetupConfig();
  }

  constructor(public activeModal: NgbActiveModal) {}

  loadSystemSetupConfig(): void {
  
    this.loadingConfigs = true;
    this.systemSetupService.getAllSystemSetup().subscribe({
      next: (configs) => {
        this.systemSetups = configs;
        console.log(this.systemSetups)
        this.loadingConfigs = false;
      },
      error: (error) => {
        this.errorMessage = 'Error Loading Configurations';
        this.loadingConfigs = false;
        console.error(error);
      },
    });
  }

  closeModal(): void {
    this.activeModal.dismiss('Cancel Click');
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.plannerAddedEvent.emit(this.planner);
      this.planner = {
        id: 0,
        name: '',
        description: '',
        plannerType: '',
        systemSetupId: null,
        fund: [],
        trigger: [],
      };
      this.activeModal.close('Save Click');
    }
  }
}
