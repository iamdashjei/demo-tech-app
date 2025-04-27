import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConsumerListComponent } from "./components/consumer-list/consumer-list.component";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        NgbPaginationModule,
        ConsumerListComponent
    ],
    exports: [
        ConsumerListComponent
    ]
})
export class ConsumerModule {}