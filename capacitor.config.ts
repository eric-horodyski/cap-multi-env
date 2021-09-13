/// <reference types="@capacitor/splash-screen" />

import { CapacitorConfig } from "@capacitor/cli";

let config: CapacitorConfig;

switch (process.env.NODE_ENV) {
  case "production":
  case "prod":
    config = {
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
    break;
  default:
    config = {
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
    break;
}

export default config;
