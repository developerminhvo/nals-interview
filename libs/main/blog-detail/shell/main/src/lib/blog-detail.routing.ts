import { Route, RouterModule } from '@angular/router';
import { NalsBlogDetailComponent } from './containers';

const routes: Route[] = [
  {
    path: '',
    component: NalsBlogDetailComponent,
  }
];

export const NalsBlogListRoutes = RouterModule.forChild(routes);
