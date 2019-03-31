import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  Geocoder,
  GeocoderRequest,
  GeocoderResult
} from '@ionic-native/google-maps';
import { ServerService } from '../server.service';
import { Company } from '../company';


const MAX_MATCHES = 10;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: GoogleMap;
  geocoder: Geocoder;
  loading: any;
  searching = false;
  searchText = '';
  searchResults: Company[] = [];

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform,
    private server: ServerService) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }


  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 53.5444,
          lng: -113.4909
        },
        zoom: 11,
        tilt: 30
      },
      styles: [
        {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit.station',
          'elementType': 'all',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        }
      ]
    });
  }

  async onButtonClick() {
    this.map.clear();

    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();

    // // Get the location of you
    // this.map.getMyLocation().then((location: MyLocation) => {
    //   this.loading.dismiss();
    //   console.log(JSON.stringify(location, null, 2));

    //   // Move the map camera to the location with animation
    //   this.map.animateCamera({
    //     target: location.latLng,
    //     zoom: 17,
    //     tilt: 30
    //   });

    //   // add a marker
    //   const marker: Marker = this.map.addMarkerSync({
    //     title: '@ionic-native/google-maps plugin!',
    //     snippet: 'This plugin is awesome!',
    //     position: location.latLng,
    //     animation: GoogleMapsAnimation.BOUNCE
    //   });

    //   // show the infoWindow
    //   marker.showInfoWindow();

    //   // If clicked it, display the alert
    //   marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //     this.showToast('clicked!');
    //   });
    // })
    // .catch(err => {
    this.loading.dismiss();
    //   this.showToast(err.error_message);
    // });

    this.dispMarker(0);
  }


  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }

  async onSearch() {
    if (this.searchText === '') {
      // No search gives no results.
      this.searching = false;
      return;
    }

    // Finds the matching companies.
    const matches: Company[] = [];
    const searchLower = this.searchText.toLowerCase();
    for (const company of this.server.companies) {
      if (company.company.toLowerCase().startsWith(searchLower)) {
        matches.push(company);
        if (matches.length >= MAX_MATCHES) {
          break;
        }
      }
    }

    if (matches.length < 2) {
      // An exact match should not suggest results.
      this.searching = false;
      return;
    }

    this.searching = true;
    this.searchResults = matches;
  }

  async dispMarker(id: number) {
    const company = this.server.getCompany(id);
    const options: GeocoderRequest = {
      address: company.address + ' ' + company.city + ' ' + company.region
    };

    Geocoder.geocode(options).then((results: GeocoderResult[]) => {
      console.log(results);
      return this.map.addMarker({
        'position': results[0].position,
        'title':  company.company
      });
    });
  }

  async selectResult(id: number) {
    this.searching = false;
    this.searchText = this.server.getCompany(id).company;
    this.dispMarker(id);
  }
}
