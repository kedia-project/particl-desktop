import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { app_routing } from './app.routing';
import { InstallerModule } from 'app/installer/installer.module';
import { RpcModule } from 'app/core/rpc/rpc.module';

import { LoadingComponent } from 'app/loading/loading.component';
import { CoreModule } from 'app/core/core.module';
import { MultiwalletModule } from 'app/multiwallet/multiwallet.module';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    /* own */
    app_routing,
    InstallerModule,
    CoreModule.forRoot(),
    MultiwalletModule.forRoot()
  ],
  bootstrap: [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
  constructor() {
  }
}
