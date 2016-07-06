import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { ChoreEditComponent } from './chore-edit.component';
import { ChoreStoreService } from './stores/chore-store.service';
import { FluxDispatcher } from './flux-dispatcher.service';
import { ChoreActions } from './actions/chore-actions';
import { ROUTE_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    ChoreStoreService,
    FluxDispatcher,
    ChoreActions,
    ROUTE_PROVIDERS
]);
