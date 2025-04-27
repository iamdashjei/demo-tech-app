import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ConsumerModule } from "./modules/consumer/consumer.module";
import { SystemSetupModule } from "./modules/system-setup/system-setup.module";

@NgModule({
    imports: [
        BrowserModule,
        AppComponent,
        ConsumerModule,
        SystemSetupModule
    ],
    providers: [],
    // bootstrap: []
})
export class AppModule {}
