import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NalsLayoutComponent} from "./nals-layout/nals-layout.component";


const ANGULAR_MODULES = [
  CommonModule,
  RouterModule
];
const COMPONENTS = [
  NalsLayoutComponent
];
@NgModule({
  imports: [
    ...ANGULAR_MODULES,
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
})
export class NalsLayoutModule {}
