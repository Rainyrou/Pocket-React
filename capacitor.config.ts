import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.clownPocket.app',
  appName: 'clownPocket',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
