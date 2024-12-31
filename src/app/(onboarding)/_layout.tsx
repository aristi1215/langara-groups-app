import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function OnboardingLayout() {
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
