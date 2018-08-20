import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WebAdminModulesProvider } from './web-admin-modules-provider.module';
import { RouterModule, Routes } from '@angular/router'
import { WebConsoleComponent, AuthGuard } from 'web-console-core'
import { WebConsoleLoginComponent } from 'web-console-login'
import { WC_API_BASE_PATH, WC_OAUTH_BASE_PATH } from 'web-console-core'
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: WebConsoleLoginComponent },
  { path: 'dashboard', component: WebConsoleComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  , WebAdminModulesProvider
  ],
  providers: [ 
    { provide: WC_API_BASE_PATH, useValue: environment.API_BASE_PATH }, 
    { provide: WC_OAUTH_BASE_PATH, useValue: environment.OAUTH_BAS_PATH }, 
    WebAdminModulesProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }
