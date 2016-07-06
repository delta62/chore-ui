import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { ChoreStoreService } from './stores/chore-store.service';
import { FluxDispatcher } from './flux-dispatcher.service';
import { ChoreActions } from './actions/chore-actions';

bootstrap(AppComponent, [
    ChoreStoreService,
    FluxDispatcher,
    ChoreActions
]);
