import {Routes} from '@angular/router';
import {AutosPageComponent} from './autos/pages/autos-page/autos-page.component';
import {AutoCreateEditPageComponent} from './autos/pages/auto-create-edit-page/auto-create-edit-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AutosPageComponent
  },
  {
    path: 'auto/create',
    component: AutoCreateEditPageComponent
  },
  {
    path: 'auto/edit/:id',
    component: AutoCreateEditPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }];
