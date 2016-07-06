import { provideRouter, RouterConfig } from '@angular/router';

import { ChoreListComponent } from './chore-list.component';
import { AdminComponent } from './admin.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ChoreListComponent },
  { path: 'admin', component: AdminComponent }
];

export const ROUTE_PROVIDERS = [
  provideRouter(routes)
];
