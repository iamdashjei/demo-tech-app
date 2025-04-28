import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ConsumerModule } from "./modules/consumer/consumer.module";
import { SystemSetupModule } from "./modules/system-setup/system-setup.module";
import { BrowserAnimationsModule } from    '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        AppComponent,
        BrowserAnimationsModule,
        ConsumerModule,
        SystemSetupModule
    ],
    providers: [],
    // bootstrap: []
})
export class AppModule {}
