import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NalsBlogListComponent } from './containers/nals-blog-list/nals-blog-list.component';
import {NalsBlogListRoutes} from "./nals-blog-list.routing";

const ANGULAR_MODULES = [
  CommonModule,
];
const MODULES = [
  NalsBlogListRoutes
];
const COMPONENTS = [
  NalsBlogListComponent
];
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
export class NalsBlogListModule {}
