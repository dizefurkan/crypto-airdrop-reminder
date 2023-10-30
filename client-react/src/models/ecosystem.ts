import { v4 as uuidv4 } from "uuid";

import { Dapp } from "./dapp";

export class Ecosystem {
  id: string;
  name: string;
  dapps: Dapp[];

  constructor(data: Partial<Ecosystem>) {
    this.id = data.id || uuidv4();
    this.name = data.name || "";
    this.dapps = data.dapps || [];
  }
}
