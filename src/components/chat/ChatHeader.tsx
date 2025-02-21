import { View, Image, Pressable } from "react-native";
import { LeftArrow, ThreeDots } from "@/assets/icons/icons";
import { ThemedText } from "../ThemedText";
import { router } from "expo-router";

export const ChatHeader = () => {
  return (
    <View className="h-[5rem] flex-row items-center justify-between px-2 pr-6 bg-white">
      <View className="flex-row items-center gap-5">
        <Pressable onPress={() => router.back()} className="px-2">
          <LeftArrow color="gray" />
        </Pressable>
        <Image
          source={require("@/assets/images/langara-logo-circle.png")}
          className="w-20 h-20"
        />
        <View>
          <ThemedText type="h3">Computer science club</ThemedText>
          <ThemedText className="text-gray-500">100+ members</ThemedText>
        </View>
      </View>
      <ThreeDots color="gray" />
    </View>
  );
};
