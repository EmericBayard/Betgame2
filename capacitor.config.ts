import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'fr.preprodparten.betgame',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '300',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '2000',
      ShowSplashScreenSpinner: 'false',
      orientation: 'portrait',
      'android-minSdkVersion': '22',
      'android-targetSdkVersion': '29'
    }
  }
};

export default config;
