import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { fontFamily } from './src/theme/font-family';
import { fontSize } from './src/theme/font-size';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { colors } from './src/theme/colors';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular, Roboto_500Medium, Roboto_700Bold
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }

  }, [fontsLoaded]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md
  }
});
