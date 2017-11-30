import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WebAdminModulesProvider } from './web-admin-modules-provider.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, WebAdminModulesProvider
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
