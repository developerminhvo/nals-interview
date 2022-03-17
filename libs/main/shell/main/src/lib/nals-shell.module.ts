import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NalsLayoutModule} from "@main-shell-ui-layout";
import {NalsShellComponent} from "./nals-shell/nals-shell.component";
import {PIMainShellMainRoutes} from "./nals-shell.routing";

const ANGULAR_MODULES = [
  CommonModule
];
const MODULES = [
  NalsLayoutModule,
  PIMainShellMainRoutes
];
const COMPONENTS = [
  NalsShellComponent
]
@NgModule({
  imports: [
    ...ANGULAR_MODULES,
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS
  ],
})
export class NalsShellModule {}
