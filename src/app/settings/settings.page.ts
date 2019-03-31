import { Component } from '@angular/core';
import { SettingsService } from '../settings.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  constructor(
    public settings: SettingsService,
    private localNotifications: LocalNotifications) { }

  openWebsite() {
    window.open('https://lecdea.ca/', '_blank');
  }

  scheduleNotification() {
    // Schedules a delayed notification.
    this.localNotifications.schedule({
      text: 'RABAIS!!!',
      trigger: { at: new Date(new Date().getTime() + 5000) },
      led: 'FF0000',
    });
  }
}
