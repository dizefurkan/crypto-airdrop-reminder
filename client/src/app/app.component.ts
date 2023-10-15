import { Component, NgModule } from '@angular/core';

import { Network } from 'src/models/network';
import { BrowserStorageService } from './storage.servise';
import { Dapp } from 'src/models/dapp';

const UNKNOWN = 'UNKNOWN';
const LS_KEYS = {
  NETWORKS: 'NETWORKS',
  DAPPS: 'DAPPS',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
  networks: Network[] = [
    new Network({
      name: 'Furkan',
      dapps: [],
    }),
  ];

  constructor(public localStorage: BrowserStorageService) {
    const dapps = this.getDappsFromLS();
    const networks = this.getNetworksFromLS();

    // this.networks = networks.map((network) => {
    //   network.dapps = dapps.filter((dapp) => dapp.networkId === network.id);
    //   return network;
    // });
  }

  setValue = (e: any) => {
    console.log('calisti', e);
  };

  getDappsFromLS = () => {
    const dapps = this.localStorage.get(LS_KEYS.DAPPS);
    if (!Array.isArray(dapps)) return [];
    return dapps.map((dapp) => new Dapp(dapp));
  };

  getNetworksFromLS = () => {
    const networks = this.localStorage.get(LS_KEYS.NETWORKS);
    if (!Array.isArray(networks)) return [];
    return networks.map((network) => new Network(network));
  };
}
