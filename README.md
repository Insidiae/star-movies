# Star Movies

This is a React Native demo application that fetches movies via the iTunes API.

### Tech Stack

This project uses the following technologies:

- [React Native](https://reactnative.dev/) (obviously)
- [Expo](https://docs.expo.dev/) for fast prototyping
- [Expo Router](https://docs.expo.dev/routing/introduction/) for navigation
- [React Native Paper](https://callstack.github.io/react-native-paper/) for basic styling
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) for fetching data from the iTunes API
- [Redux Persist](https://github.com/rt2zz/redux-persist) for persisting favourites data for offline use

## Running the app

### System Requirements

- [git](https://git-scm.com/) v2.18 or greater
- [Node](https://nodejs.org/) v18.15.0 or greater
- [npm](https://www.npmjs.com/) version 9.5.0 or greater

All of these must be available in your PATH. To verify things are set up properly, you can run this:

```sh
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment variable and how to fix it here for [windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/) or [mac/linux](http://stackoverflow.com/a/24322978/971592).

### Setup

Make sure you have the project dependencies installed:

```sh
npm install
```

You can test the app locally via [Expo Go](https://expo.dev/client) or via an Android/iOS emulator. Once you have Expo Go installed on your testing device, run the following command:

```sh
npm start
```

Follow the instructions that appear when running the command above and scan the QR code to run the app via Expo Go.

### Optional: Run the app locally on your own device

You can also create a local development build via the following commands.

To run the app locally, you'll need to install a lot of dependencies. Follow these instructions from the Expo Documentation for a step-by-step guide on installing these dependencies:

- [Expo Docs: Local App Development Prerequisites](https://docs.expo.dev/workflow/android-studio-emulator/)
- [Expo Docs: Install Android Studio and Android SDKs (for Android Builds)](https://docs.expo.dev/workflow/android-studio-emulator/)
- [Expo Docs: Install XCode and Command Line Tools (for iOS builds)](https://docs.expo.dev/workflow/ios-simulator/#install-xcode-command-line-tools)

Once you've installed these dependencies, you can generate a local build vis the following commands:

```sh
# For Android
npx expo run:android
```

```sh
# For iOS
npx expo run:ios
```
