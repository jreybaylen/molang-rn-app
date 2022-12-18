Installation
- Install NodeJS, Android Studio, JDK, Bash, Visual Studio Code
- Install react native application via `npx react-native YourAppName`
- Open Android Studio locate JDK & SDK location add these to environment variables

Development
- Open Visual Studio Code
- Run command `npx react-native start`
- Open or Start emulator
- Open another terminal/CMD/PowerShell and run `npx react-native run-android`

Production
- Copy the following code below and add these 2 commands in the package.json script
    "ios:prod": "react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ios",
    "android:prod": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res"
- For Android, create a folder called "assets" in this path "android/app/src/main"
- Run "yarn or npm android:prod" (Command after any updates)
- Open Android Studio
- Build > Clean Project
- Build > Rebuild Project
- Build > Build APK
- Locate APK (Lower right corner of Android Studio) or get the APK here "android\app\build\outputs\apk\debug"


    Routing

  const router = useNavigation()

  const greetings = () => {
    router.navigate('Greetings')
  }