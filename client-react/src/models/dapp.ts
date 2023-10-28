import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

export class Dapp {
  static FREQUENCIES = {
    EVERYDAY: "EVERYDAY",
    MIDWEEK: "MIDWEEK",
    WEEKEND: "WEEKEND",
    EVERY_WEEK: "EVERY_WEEK",
    EVERY_TWO_WEEKS: "EVERY_TWO_WEEKS",
    EVERY_MONTH: "EVERY_MONTH",
  };

  static getFrequencyText = (frequency: keyof typeof Dapp.FREQUENCIES) => {
    switch (frequency) {
      case Dapp.FREQUENCIES.EVERYDAY:
        return "Everyday";
      case Dapp.FREQUENCIES.MIDWEEK:
        return "Midweek";
      case Dapp.FREQUENCIES.WEEKEND:
        return "Weekend";
      case Dapp.FREQUENCIES.EVERY_WEEK:
        return "Every week";
      case Dapp.FREQUENCIES.EVERY_TWO_WEEKS:
        return "Every Two (2) Weeks";
      case Dapp.FREQUENCIES.EVERY_MONTH:
        return "Every Month";
      default:
        return "";
    }
  };

  id: string;
  networkId: string;
  name: string;
  startedDate: number;
  frequency: keyof typeof Dapp.FREQUENCIES;

  constructor(data: Partial<Dapp>) {
    this.id = data.id || uuidv4();
    this.networkId = data.networkId || "";
    this.name = data.name || "";
    this.startedDate = data.startedDate || Date.now();
    this.frequency = data.frequency || "EVERYDAY";

    makeAutoObservable(this);
  }
}
