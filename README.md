# EDNA App

This is a React Native based app that uses Expo for running local development servers and for building native release bundles.

## Setting up

1. Add environment variables listed below. If running locally, you can use a .env file at the root of the application
2. Run `yarn install`
3. For native development, run `yarn start` and follow the instructions to download Expo Go app on your device or to run a simulator (iOS is Mac only and needs XCode installed with devices added)

## Environment Variables

| Name          | Description                                                                                                                                                                                                |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DASHBOARD_URL | Full url of running edna ops portal. e.g https://dashboard.edna.fund                                                                                                                                       |
| API_URL       | Full url of running edna app server e.g https://api.edna.fund (for local server you will need to use your computer ip address and not localhost to run on real device or simulator over your wifi network) |

## Building and Release

Use the Expo EAS cli to run builds. In `package.json` you will see `build:ios, build:android, and build:web` options. If you run a build, ensure the build number is updated in `app.json` first. Alternatively, use `release:ios` which uses the `pre-build.js` file to update app.json for you first for convenience.
