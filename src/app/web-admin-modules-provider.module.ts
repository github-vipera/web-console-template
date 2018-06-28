import {NgModule} from '@angular/core'
import { WebAdminCoreModule } from 'web-console-core'
import { WebConsoleLoginModule } from 'web-console-login'

@NgModule({
    imports:[ WebAdminCoreModule.withConfig({loginRoute:"login",dashboardRoute:"dashboard"}), WebConsoleLoginModule],
    exports:[ WebAdminCoreModule, WebConsoleLoginModule ]
})
export class WebAdminModulesProvider {
    
}