import { v4 as uuidv4 } from 'uuid';

export class Dapp {
  static FREQUENCIES = {
    EVERYDAY: 'EVERYDAY',
    MIDWEEK: 'MIDWEEK',
    WEEKEND: 'WEEKEND',
    EVERY_WEEK: 'EVERY_WEEK',
    EVERY_TWO_WEEKS: 'EVERY_TWO_WEEKS',
    EVERY_MONTH: 'EVERY_MONTH',
  };

  id: string;
  networkId: string;
  name: string;
  startedDate: number;
  frequency: keyof typeof Dapp.FREQUENCIES;
  currentDate: number;

  constructor(data: Partial<Dapp>) {
    this.id = data.id || uuidv4();
    this.networkId = data.networkId || '';
    this.name = data.name || '';
    this.startedDate = data.startedDate || Date.now();
    this.frequency = data.frequency || 'EVERYDAY';
    this.currentDate = Date.now();
  }
}
