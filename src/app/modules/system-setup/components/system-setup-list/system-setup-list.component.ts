import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SystemSetupService } from '../../../../core/services/system-setup.service';
import { SystemSetup } from '../../../../core/models/system-setup.model';
import {
  NgbModal,
  NgbModalRef,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AddSystemSetupModalComponent } from '../../../add-system-setup-modal/add-system-setup-modal.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-system-setup-list',
  templateUrl: './system-setup.component.html',
  styleUrls: ['./system-setup.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, NgbPaginationModule],
})
export class SystemSetupListComponent implements OnInit {
  private setupService = inject(SystemSetupService);
  private modalService = inject(NgbModal);
  private http = inject(HttpClient);
  modalRef?: NgbModalRef;

  setups: SystemSetup[] = [];
  totalSetups: number = 0;
  currentPage: number = 1;
  pageIndex: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  searchTerm: string = '';
  apiUrl = 'http://localhost:8080/api/v1/system-setups';

  editingSetupId: number | null = null;
  expandedSetupId: number | null = null;
  editedSetup: { [id: number]: SystemSetup } = {};


  ngOnInit(): void {
    this.loadSetups();
  }

  loadSetups(): void {
    this.setupService
      .getSystemSetupPaginated(
        this.currentPage - 1,
        this.pageSize,
        this.searchTerm
      )
      .subscribe((response) => {
        this.setups = response.content;
        this.totalSetups = response.totalElements;
        this.initializeEditedSetups();
      });
  }

  handlePageEvent(event: number): void {
    this.pageSize = event;
    this.pageIndex = event;
    this.loadSetups();
  }

  toggleExpand(setupId: number): void {
    this.expandedSetupId = this.expandedSetupId === setupId ? null : setupId;
  }

  isExpanded(setupId: number): boolean {
    return this.expandedSetupId === setupId;
  }

  searchSetups(): void {
    this.currentPage = 1;
    this.loadSetups();
  }

  initializeEditedSetups(): void {
    this.setups.forEach((setup) => {
      this.editedSetup[setup.id!] = { ...setup };
    });
  }

  addSystemSetup(setup: SystemSetup): void {
    this.http.post<SystemSetup>(this.apiUrl, setup).subscribe({
      next: (response) => {
        console.log('Saved Successfully: ', response);
        this.loadSetups();
      },
      error: (error) => {
        console.error('Error Adding a System Setup: ', error);
      },
    });
  }

  isEditing(setupId: number): boolean {
    return this.editingSetupId === setupId;
  }

  saveEdit(setupId: number): void {
    if (this.editedSetup[setupId]) {
      this.setupService
        .updateSystemSetup(this.editedSetup[setupId])
        .subscribe(() => {
          this.editingSetupId = null;
          this.loadSetups();
        });
    }
  }

  openAddSystemSetupModal(): void {
    this.modalRef = this.modalService.open(AddSystemSetupModalComponent);
    this.modalRef.componentInstance.setupAddedEvent.subscribe(
      (setup: SystemSetup) => {
        this.addSystemSetup(setup);
      }
    );
  }
}
