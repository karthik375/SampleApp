import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'my-uxapp',
  webDir: 'dist/my-uxapp',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      'phonegap-version': 'cli-8.1.1',
      SplashScreen: 'screen',
      SplashScreenDelay: '10000',
      StatusBarOverlaysWebView: 'true',
      StatusBarBackgroundColor: '#000000',
      StatusBarStyle: 'lightcontent',
      webviewbounce: 'false',
      DisallowOverscroll: 'true',
      'deployment-target': '12',
      orientation: 'default',
      'android-minSdkVersion': '19',
      'windows-target-version': '8.1',
      'android-build-tool': 'gradle',
      AndroidPersistentFileLocation: 'Compatibility',
      'target-device': 'handset',
      BackupWebStorage: 'local',
      GOOGLE_MAPS_ANDROID_API_KEY: '',
      GOOGLE_MAPS_IOS_API_KEY: ''
    }
  }
};

export default config;
