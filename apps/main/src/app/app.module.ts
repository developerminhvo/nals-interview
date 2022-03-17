import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NalsShellModule} from "@main-shell";

const ANGULAR_MODULES = [
  BrowserModule
]
const MODULES = [
  NalsShellModule
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...ANGULAR_MODULES,
    ...MODULES
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
