import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './components';
import { ChoreStore } from './stores';
import { FluxDispatcher } from './flux-dispatcher.service';
import { ChoreActions } from './actions';
import { ROUTE_PROVIDERS } from './app.routes';

bootstrap(AppComponent, [
    ChoreStore,
    FluxDispatcher,
    ChoreActions,
    ROUTE_PROVIDERS
]);
