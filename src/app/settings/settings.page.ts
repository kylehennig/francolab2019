import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  constructor(public settings: SettingsService) { }

  openWebsite() {
    window.open('https://lecdea.ca/',  '_blank');
  }
}
