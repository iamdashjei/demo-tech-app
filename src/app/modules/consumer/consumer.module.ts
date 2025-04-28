import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConsumerListComponent } from "./components/consumer-list/consumer-list.component";

@NgModule({
    imports: [
        CommonModule,
        ConsumerListComponent
    ],
    exports: [
        ConsumerListComponent
    ]
})
export class ConsumerModule {}