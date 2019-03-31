import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private _threeD = false;
  callbacksThreeD: Array<(boolean) => void> = [];
  constructor() { }

  get threeD() {
    return this._threeD;
  }

  set threeD(threeD: boolean) {
    this._threeD = threeD;
    this.callbacksThreeD.forEach(callback => callback(threeD));
  }

  subscribeThreeD(callback: (threeD: boolean) => void) {
    this.callbacksThreeD.push(callback);
  }
}
