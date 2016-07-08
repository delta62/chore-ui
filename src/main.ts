import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './components';
import { ChoreStore, ChoreEditStore } from './stores';
import { FluxDispatcher } from './flux-dispatcher.service';
import { ChoreActions, ChoreEditActions } from './actions';
import { ROUTE_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    ChoreStore,
    ChoreEditStore,
    FluxDispatcher,
    ChoreActions,
    ChoreEditActions,
    ROUTE_PROVIDERS
]);
