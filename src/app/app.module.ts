import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WebAdminModulesProvider } from './web-admin-modules-provider.module';
import { RouterModule, Routes } from '@angular/router'
import { WebAdminConsoleComponent, AuthGuard } from 'web-console-core'
import { WebConsoleLoginComponent } from 'web-console-login'

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: WebConsoleLoginComponent },
  { path: 'dashboard', component: WebAdminConsoleComponent, canActivate: [AuthGuard] }
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
  providers: [ WebAdminModulesProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }
