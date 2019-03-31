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
      this.focusOnId(id);
    }
    this.settings.subscribeThreeD(threeD => {
      this.options.gestures.tilt = threeD;
      this.map.setOptions(this.options);
    });
  }

  async loadMap() {
    this.map = GoogleMaps.create('map_canvas', this.options);
  }

  async blueDot() {
    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      this.loading.dismiss();

      // add a marker
      const marker: Marker = this.map.addMarkerSync({
        position: location.latLng,
        // icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        // icon: 'https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle_blue.png',
        'icon': '../../assets/saleMarker.png',
      });
    })
      .catch(err => {
        this.loading.dismiss();
      });
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
    this.blueDot();
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
    this.searching = false;
    this.searchText = this.server.getCompany(id).company;
    this.dispMarkerData(id);
    this.focusOnId(id);
  }

  async dispMarkerData(id: number) {
    const company = this.server.companies[id];
    let info = '<h4>' + company.address + ', ' + company.city + ', ' + company.region + '<br>'
                + '</h4>'

    if (company.phone !== '') {
      info += '<h4>' + company.phone + '</h4>';
    }
    if (company.email !== '') {
      info += '<h4>' + company.email + '</h4>';
    }
    if (this.server.onSale(id)) {
      info += '<h4>' + this.server.getSale(id).description + '</h4>';
    }
    if (this.server.onSale(id)) {
      return this.map.addMarker({
        'position': {
          'lat': company.lat,
          'lng': company.lng
        },
        'icon': 'https://i.imgur.com/7wnV1Ap.png',
        'title': '<h3>' + company.company + '</h3>',
        'snippet': info,
      });
    } else {
      return this.map.addMarker({
        'position': {
          'lat': company.lat,
          'lng': company.lng
        },
        'title': '<h3>' + company.company + '</h3>',
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

  // async getCurrentLocation(): Promise<LatLng> {
  //   return this.map.getMyLocation().then(location => location.latLng);
  // }
}
