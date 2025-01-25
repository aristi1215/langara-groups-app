import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { useAuthContext } from "@/context/AuthContextProvider";

export default function OnboardingLayout() {
  
  const {session, loading} = useAuthContext()

  if(session && !loading) {
    router.push('/main/groups')
    return
  }

  return (
    <SafeAreaView className="flex-1">
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false}}  />
        <Stack.Screen name="get-started" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
