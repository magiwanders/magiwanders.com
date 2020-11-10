# Flutter and Firebase integration

When adding app to Firebase, a SHA1 key is asked

>cd android && ./gradlew clean && ./gradlew assembleRelease
>

The output contains the SHA1 key. Note that JAVA_HOME must point to the correct location (as of Nov20 java 11 is not supported I had to downgrade to java 8, see in the  [java doc](java.md))
