import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NalsBlogDetailComponent } from './containers/nals-blog-detail/nals-blog-detail.component';
import {NalsBlogListRoutes} from "./blog-detail.routing";

const ANGULAR_MODULES = [
  CommonModule,
];
const MODULES = [
  NalsBlogListRoutes
];
const COMPONENTS = [
  NalsBlogDetailComponent
]
@NgModule({
  imports: [
    ...ANGULAR_MODULES,
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
})
export class MainBlogDetailShellMainModule {}
