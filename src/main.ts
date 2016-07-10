import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './components';
import { ChoreStore, ChoreEditStore, TaskStore } from './stores';
import { FluxDispatcher } from './flux-dispatcher.service';
import { ChoreActions, ChoreEditActions } from './actions';
import { ROUTE_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    ChoreStore,
    ChoreEditStore,
    TaskStore,
    FluxDispatcher,
    ChoreActions,
    ChoreEditActions,
    ROUTE_PROVIDERS
]);
