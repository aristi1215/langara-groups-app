import React from "react";
import { router, Stack } from "expo-router";
import { LeftArrow } from "../../assets/icons/icons";
import { TouchableOpacity, View } from "react-native";

export default function mainLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="shop/(products)/(category)/[category]"
        options={{
          contentStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
            <View className="bg-[#F4F4F4] rounded-full w-14 h-14 items-center justify-center">
              <LeftArrow size={30}/>
            </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="shop/(products)/(id)/[id]"
        options={{
          contentStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
            <View className="bg-[#F4F4F4] rounded-full w-14 h-14 items-center justify-center">
              <LeftArrow size={30}/>
            </View>
            </TouchableOpacity>
          ),
        }}
      />

    </Stack>
  );
}
