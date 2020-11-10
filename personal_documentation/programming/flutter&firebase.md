# Flutter and Firebase integration

When adding app to Firebase, a SHA1 key is asked

>cd android && ./gradlew clean && ./gradlew assembleRelease
> ./gradlew signingReport

The output contains the SHA1 key. Note that JAVA_HOME must point to the correct location (as of Nov20 java 11 is not supported I had to downgrade to java 8, see in the  [java doc](java.md))

[List of dependencies related to firebase, to be put in the android/app/build.gradle as in the example below](https://firebase.google.com/docs/android/setup#available-libraries)

dependencies {
    implementation platform('com.google.firebase:firebase-bom:26.0.0')
    implementation 'com.google.firebase:firebase-analytics'
    implementation 'com.google.firebase:firebase-auth'
    implementation 'com.google.firebase:firebase-firestore'
}

at the end of the file
