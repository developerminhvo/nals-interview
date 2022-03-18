import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NalsShellModule } from '@main-shell';
import { environment } from '../environments/environment';
import { getAppConfigProvider } from '@nals-interview-test/main/shared/data-access/app-config';
import { HttpClientModule } from '@angular/common/http';

const ANGULAR_MODULES = [BrowserModule];
const MODULES = [NalsShellModule, HttpClientModule];
@NgModule({
  declarations: [AppComponent],
  imports: [...ANGULAR_MODULES, ...MODULES],
  providers: [getAppConfigProvider(environment)],
  bootstrap: [AppComponent],
})
export class AppModule {}
