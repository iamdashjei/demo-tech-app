import { Component, OnInit, inject } from '@angular/core';
import { ConsumerService } from '../../../../core/services/consumer.service';
import { Consumer } from '../../../../core/models/consumer.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddPlannerModalComponent } from "../../../add-planner-modal/add-planner-modal.component";
import { HttpClient } from '@angular/common/http';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-consumer-list',
    templateUrl: './consumer.component.html',
    styleUrls: ['./consumer.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule],
})
export class ConsumerListComponent implements OnInit {
    private consumerService = inject(ConsumerService);
    private modalService = inject(NgbModal);
    private http = inject(HttpClient);
    modalRef?: NgbModalRef;
    consumers: Consumer[] = [];
    totalConsumers: number = 0;
    currentPage: number = 1;
    pageSize: number = 10;
    searchTerm: string = '';
    apiUrl = 'http://localhost:8080/api/v1/consumer';

    ngOnInit(): void {
        this.loadConsumers();
    }

    loadConsumers(): void {
        this.consumerService.getConsumerPaginated(this.currentPage - 1, this.pageSize, this.searchTerm)
            .subscribe((response) => {
                this.consumers = response.content;
                this.totalConsumers = response.totalElements;
            });
    }

    handlePageChange(event: number): void {
        this.currentPage = event;
        this.loadConsumers();
    }

    searchConsumers(): void {
        this.currentPage = 1;
        this.loadConsumers();
    }

    addPlanner(planner: Consumer): void {
        this.http.post<Consumer>(this.apiUrl, planner).subscribe(
            {
                next: (response) => {
                    console.log("Saved Successfully: ", response);
                    this.loadConsumers();
                },
                error: (error) => {
                    console.error("Error Adding a Planner: ", error);
                }
            }
        )
    }

    openAddPlannerModal(): void {
        this.modalRef = this.modalService.open(AddPlannerModalComponent);
        this.modalRef.componentInstance.plannerAddedEvent.subscribe((planner: Consumer) => {
            this.addPlanner(planner);
        });
    }
}