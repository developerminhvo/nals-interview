import { Route, RouterModule } from '@angular/router';
import {NalsShellComponent} from "./containers";

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
        loadChildren: () => import('@main-list').then((m) => m.NalsBlogListModule)
      },
      {
        path: 'list/:id',
        loadChildren: () => import('@main-blog-detail').then((m) => m.MainBlogDetailShellMainModule)
      }
    ]
  }
];

export const PIMainShellMainRoutes = RouterModule.forRoot(routes, { enableTracing: true });
