import { Route, RouterModule } from '@angular/router';
import { NalsBlogListComponent } from './containers';

const routes: Route[] = [
  {
    path: '',
    component: NalsBlogListComponent
  }
];

export const NalsBlogListRoutes = RouterModule.forChild(routes);
