import { NgModule } from "@angular/core";
import { SystemSetupListComponent } from "./components/system-setup-list/system-setup-list.component";
import { CommonModule } from "@angular/common";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    imports: [
        CommonModule,
        NgbPaginationModule,
        SystemSetupListComponent
    ],
    exports: [
        SystemSetupListComponent
    ]
})
export class SystemSetupModule {}