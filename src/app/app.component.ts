import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Environment } from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Map',
      url: '/map',
      icon: 'map'
    },
    {
      title: 'Categories',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDdiznDtcGu8LGMu7Y6DJIrLLmbyigKxIU',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDdiznDtcGu8LGMu7Y6DJIrLLmbyigKxIU'
      });
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#00a3da');
      this.splashScreen.hide();
    });
  }
}
