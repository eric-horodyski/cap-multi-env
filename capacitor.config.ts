/// <reference types="@capacitor/splash-screen" />

import { CapacitorConfig } from "@capacitor/cli";

const devConfig: CapacitorConfig = {
  appId: "cap.multi.env.dev",
  appName: "Multi Env",
  webDir: "build",
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
    },
  },
  ios: {
    scheme: "App",
  },
  android: {
    flavor: "dev",
  },
};

const prodConfig: CapacitorConfig = {
  appId: "cap.multi.env",
  appName: "Multi Env",
  webDir: "build",
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 5000,
      showSpinner: true,
    },
  },
  ios: {
    scheme: "App_Prod",
  },
  android: {
    flavor: "prod",
  },
};

export default prodConfig;
