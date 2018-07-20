import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// This is seriously the only UI import.
import { MatDialogModule } from '@angular/material';

import { RpcWithStateModule } from './rpc/rpc.module';
import { MarketModule } from './market/market.module';

import { IpcService } from './ipc/ipc.service';
import { RpcService } from './rpc/rpc.service';
import { ZmqService } from './zmq/zmq.service';
import { MultiwalletService } from './multiwallet/multiwallet.service';

import { UpdaterService } from './updater/updater.service';
import { NotificationService } from './notification/notification.service';
import { SnackbarService } from './snackbar/snackbar.service';

import { UpdaterComponent } from './updater/modal/updater.component';

// barrel, not used
import { BlockStatusService } from './rpc/blockstatus/blockstatus.service'
import { PeerService } from './rpc/peer/peer.service';

  /*
    Loading the core library will intialize IPC & RPC
  */
@NgModule({
  imports: [
    CommonModule,
    RpcWithStateModule.forRoot(), // TODO: replace with just Rpc one day
    MarketModule.forRoot(),
    MatDialogModule
  ],
  declarations: [UpdaterComponent],
  entryComponents: [ UpdaterComponent ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        IpcService,
        ZmqService,
        UpdaterService,
        SnackbarService,
        NotificationService,
        MultiwalletService
      ]
    };
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [

      ]
    };
  }
}

export { IpcService } from './ipc/ipc.service';
export { RpcService } from './rpc/rpc.service';
export { RpcStateService } from './rpc/rpc-state/rpc-state.service';
export { UpdaterService } from './updater/updater.service';
export { NotificationService } from './notification/notification.service';
export { BlockStatusService } from './rpc/blockstatus/blockstatus.service'
export { PeerService } from './rpc/peer/peer.service';
export { SnackbarService } from './snackbar/snackbar.service';
