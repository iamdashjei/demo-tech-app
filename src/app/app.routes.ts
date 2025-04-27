import { Routes } from '@angular/router';
import { ConsumerListComponent } from './modules/consumer/components/consumer-list/consumer-list.component';
import { SystemSetupListComponent } from './modules/system-setup/components/system-setup-list/system-setup-list.component';

export const routes: Routes = [
    { path: 'consumers', component: ConsumerListComponent },
    { path: 'system-setup', component: SystemSetupListComponent },
    { path: '', redirectTo: '/system-setup', pathMatch: 'full'}
];
