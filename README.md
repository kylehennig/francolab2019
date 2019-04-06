# Francolab 2019
Submission for the two day innovation competition hosted by the University of Alberta Campus Saint-Jean.
http://francolab.csj.ualberta.ca/about/

## Team members
Kyle Hennig, Konrad Staniszewski, and Eric Claerhout.

## Project
Our team opted to create a mobile application to help the Francophone community locate nearby businesses offering services that are available in French. It can be run as an iOS app, Android app, and web application.

## Features
- A listing of all businesses registered with the Conseil de Développement Économique de l'Alberta (CDEA).
- Google Maps integration.
- Search for businesses by name.
- Businesses sorted by industry.
- Special discounts for app users.
- If geolocation permission is granted, you can find directions to nearby businesses by selecting them on the map (mobile only).
- Local push notifications (mobile only).

## Awards
We were awarded the Industry Prize upon the completion of the innovation fair.

## Running the application
### Getting started
Begin by cloning this repository to your computer.
Open a terminal in the same folder as this README and run `npm install` to download the required dependencies.

### Web
To run the web version of the app, run `ionic cordova run browser`. Once the application has finished building it should automatically open in your default web browser. We have so far only tested it in Google Chrome.

### Android
First install Android Studio. Then, install the Android 9.0 (Pie) SDK.<br>
If you plan to use an emulator, install an Android Virtual Device (AVD) and run the command `ionic cordova run android`.<br>
If you plan to use an actual device, connect it to your computer via USB and run `ionic cordova run android --device`.

### iOS
To run our app on iOS, you must have macOS installed on your computer. You can generate an Xcode project by running `ionic cordova build ios`. Then, open the Xcode project and run it in an emulator or on your iOS device as normal.
