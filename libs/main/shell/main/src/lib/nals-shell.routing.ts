import { Route, RouterModule } from '@angular/router';
import {NalsShellComponent} from "./nals-shell/nals-shell.component";

const routes: Route[] = [
  {
    path: '',
    component: NalsShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        loadChildren: () => import('@main-shell-main').then((m) => m.NalsShellModule)
      },
    ]
  }
];

export const PIMainShellMainRoutes = RouterModule.forRoot(routes, { enableTracing: true });
