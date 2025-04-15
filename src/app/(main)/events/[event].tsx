import { LeftArrow } from "@/assets/icons/icons";
import { CustomButton } from "@/components/CustomButton";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { CloseIcon } from "@/assets/icons/icons";
import { ThemedText } from "@/components/ThemedText";

export default function index() {
  const { event } = useLocalSearchParams();
  const eventData: {name: string, description: string} = Array.isArray(event) ? JSON.parse(event[0]) : JSON.parse(event)
  const { name, description } = eventData;
  return (
    <View className="items-center justify-center h-full p-2">
      <Stack.Screen
        options={{
          presentation: "containedTransparentModal",
          title: name,
          headerShown: false,
        }}
      />
      <View className="bg-white rounded-2xl border border-primary-default p-6">
        <View className="flex-row items-center mb-3 gap-2">
          <TouchableOpacity onPress={() => router.back()}>
            <View className="bg-[#F4F4F4] rounded-full w-10 h-10 items-center justify-center">
              <CloseIcon size={30} />
            </View>
          </TouchableOpacity>
          <ThemedText type="h2">
            {name}
          </ThemedText>
        </View>
        <ThemedText>{description}</ThemedText>
        <CustomButton>Join Now</CustomButton>
      </View>
    </View>
  );
}
