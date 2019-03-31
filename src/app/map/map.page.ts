import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  GeocoderResult,
  MarkerOptions,
  LatLng,
  CameraPosition,
  ILatLng,
  GoogleMapOptions
} from '@ionic-native/google-maps';
import { ServerService } from '../server.service';
import { Company } from '../company';
import { SettingsService } from '../settings.service';

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
  autocompleted = false;
  searchText = '';
  searchResults: Company[] = [];
  options: GoogleMapOptions = {
    camera: {
      target: {
        lat: 53.5444,
        lng: -113.4909
      },
      zoom: 15,
    },
    controls: {
      compass: true,
      myLocation: true,
      myLocationButton: true,
      mapToolbar: true
    },
    gestures: {
      tilt: this.settings.threeD
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
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform,
    private server: ServerService,
    private settings: SettingsService) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
    await this.dispAllMark();
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    console.log(id);
    if (id !== NaN) {
      this.selectResult(id);
    }
    this.settings.subscribeThreeD(threeD => {
      this.options.gestures.tilt = threeD;
      this.map.setOptions(this.options);
    });
  }

  async loadMap() {
    this.map = GoogleMaps.create('map_canvas', this.options);
  }


  async dispAllMark() {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();
    this.loading.dismiss();
    for (let i = 0; i < this.server.companies.length; i++) {
      this.dispMarkerData(i);
    }
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
    //   });wait this.dispAllMark();
    // })
    // .catch(err => {
    this.loading.dismiss();
    //   this.showToast(err.error_message);
    // });
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
    if (this.autocompleted) {
      // Event triggered by autocomplete. Ignore.
      this.autocompleted = false;
      return;
    }

    if (this.searchText === '') {
      // No search.
      this.searchResults = [];
      this.searching = false;
      return;
    }

    // Finds the matching companies.
    const matches: Company[] = [];
    const searchLower = this.searchText.toLowerCase();
    for (const company of this.server.companies) {
      const companyLower = company.company.toLowerCase();
      if (companyLower.startsWith(searchLower)) {
        matches.push(company);
        if (matches.length >= MAX_MATCHES) {
          break;
        }
      }
    }

    // Suggests results.
    this.searchResults = matches;
    this.searching = true;
  }

  async dispMarkerApi(id: number) {
    const company = this.server.companies[id];
    const options: GeocoderRequest = {
      address: company.address + ' ' + company.city + ' ' + company.region
    };
    Geocoder.geocode(options).then((results: GeocoderResult[]) => {
      return this.map.addMarker({
        'position': results[0].position,
        'title': company.company
      });
    });
  }

  async selectResult(id: number) {
    // Autocompletes the search text.
    this.autocompleted = true;
    this.searchText = this.server.getCompany(id).company;
    this.searching = false;
    // Displays the company.
    this.focusOnId(id);
  }

  async dispMarkerData(id: number) {
    const company = this.server.companies[id];
    let info = '';
    if (this.server.onSale(id)) {
      info += this.server.getSale(id).description;
    } else {
      info += this.fullAddress(id);
    }
    if (this.server.onSale(id)) {
      return this.map.addMarker({
        'position': {
          'lat': company.lat,
          'lng': company.lng
        },
        'icon': 'https://i.imgur.com/7wnV1Ap.png',
        'title': company.company,
        'snippet': info,
      });
    } else {
      return this.map.addMarker({
        'position': {
          'lat': company.lat,
          'lng': company.lng
        },
        'title': company.company,
        'snippet': info,
      });
    }
  }


  async focusOnId(id: number) {
    const company = this.server.companies[id];
    this.map.animateCamera({
      target: {
        'lat': company.lat,
        'lng': company.lng
      }
    });
  }

  fullAddress(id: number): string {
    const company = this.server.getCompany(id);
    let fullAddress = '';
    if (company.address !== '') {
      fullAddress += company.address + ', ';
    }
    fullAddress += company.city + ', ' + company.region;
    return fullAddress;
  }
}
