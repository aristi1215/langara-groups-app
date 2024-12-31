import { View, Text, Pressable } from "react-native";
import { LeftArrow } from "@/assets/icons/icons";
import { router } from "expo-router";
import { ThemedText } from "./ThemedText";

interface Props {
  className?: string, 
  title: string
}

export const CustomBackHeader = ({className, title}: Props) => {
  return (
    <View className={className}>
      <Pressable onPress={router.back}>
        <LeftArrow size={35} />
      </Pressable>
      <ThemedText className="text-center text-3xl mx-auto" type="h2">{title}</ThemedText>
    </View>
  );
};
