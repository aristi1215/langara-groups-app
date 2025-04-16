import { LeftArrow } from "@/assets/icons/icons";
import { CustomButton } from "@/components/CustomButton";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { CloseIcon } from "@/assets/icons/icons";
import { ThemedText } from "@/components/ThemedText";

export default function index() {
  const { event } = useLocalSearchParams();
  console.log(event)
  const eventData = Array.isArray(event) ? event[0] : event
  const { name, description, date }: {name: string, description:string, date: string} = JSON.parse(eventData);
  return (
    <Pressable className="items-center justify-center h-full p-2 bg-black/30" onPress={() => router.back()}>
      <Stack.Screen
        options={{
          presentation: "containedTransparentModal",
          title: name,
          headerShown: false,
        }}
      />
      <View className="bg-white rounded-2xl border border-black p-6 gap-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
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
        <ThemedText type="h3">Event date: <ThemedText type="h3" className="text-primary-default">{date}</ThemedText></ThemedText>
        
        <CustomButton>Join Now</CustomButton>
      </View>
    </Pressable>
  );
}
