import { Stack, SplashScreen } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Image } from "react-native";
import { CustomBackHeader } from "@/components/CustomBackHeader";
import { AuthContextProvider } from "@/context/AuthContextProvider";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loadedFont, error] = useFonts({
    "Adelle-light": require("../assets/fonts/Adelle-light.otf"),
    "Adelle-bold": require("../assets/fonts/Adelle-bold.otf"),
    "Adelle-medium": require("../assets/fonts/Adelle-regular.otf"),
    "Adelle-semibold": require("../assets/fonts/Adelle-semibold.otf"),
  });

  useEffect(() => {
    if (error) {
      console.error("Error loading fonts:", error);
      return;
    }
    if (loadedFont) {
      SplashScreen.hideAsync();
    }
  }, [loadedFont, error]);

  return (
    <AuthContextProvider>
      <Stack>
        <Stack.Screen
          name="(onboarding)"
          options={{
            headerShown: true,
            title: "",
            headerLeft: () => (
              <Image
                source={require("../assets/images/langara-logo.png")}
                className="w-40 h-10"
              />
            ),
          }}
        />
        <Stack.Screen
          name="(auth)/sign-up"
          options={{
            header: () => {
              return (
                <CustomBackHeader
                  className="flex-row items-center px-5 pt-5"
                  title="Sign up"
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="(auth)/sign-in"
          options={{
            header: () => {
              return (
                <CustomBackHeader
                  className="flex-row items-center px-5 pt-5"
                  title="Sign in"
                />
              );
            },
          }}
        />
        <Stack.Screen name="main"
        options={{
          headerShown: false
        }} />
      </Stack>
    </AuthContextProvider>
  );
}
