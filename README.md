# Drill Library

## How to Run

1. delete old folder: `rm -rf ./drill-library`
2. get latest code: `git clone https://github.com/sufuwang/drill-library.git`
3. run `cd ./drill-library`
4. prepare environment<br />
   a. `pod deintegrate ./ios/MyApp.xcodeproj`<br />
   b. `pod setup`<br />
   c. `pod install --project-directory=./ios`
5. install node packages: `yarn`
6. run simulator: `yarn dev`

If you want to simulate in <b>IPhone 14 Pro Max</b>, you should open a new terminal, and run `yarn ios` after `yarn dev` command.

Otherwise, you only enter `i`, after `yarn dev` command, will show <b>IPhone 3rd</b>.

## Guide Docs

1. [Figama](https://www.figma.com/file/387BFeTHjPkWwU6CV3nTpX/Untitled?type=design&node-id=0%3A1&mode=design&t=8zFEYqo5S1aCiRl0-1)
2. [How to prepare develop environment?](https://reactnative.dev/docs/environment-setup)
3. [Installation Of React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/)
4. [UI Component Library used in this project](https://wix.github.io/react-native-ui-lib/docs/getting-started/setup)
