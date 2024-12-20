import { Stack, SplashScreen } from "expo-router";
import '../global.css'
import { useFonts } from 'expo-font';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loadedFont, error] = useFonts({
    'Adelle-light': require('@/assets/fonts/Adelle-light.otf'),
    'Adelle-bold': require('@/assets/fonts/Adelle-bold.otf'),
    'Adelle-medium': require('@/assets/fonts/Adelle-regular.otf'),
    'Adelle-semibold': require('@/assets/fonts/Adelle-semibold.otf'),
  })

  useEffect(() => {
    if(error) throw new Error('Error loading the fonts', error)

    if(loadedFont) {
      SplashScreen.hideAsync()
    }
  }, [loadedFont, error])

  return (
  <Stack>
      <Stack.Screen name="(onboarding)" />
  </Stack>
  
);
}