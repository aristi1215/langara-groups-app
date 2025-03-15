import { View, Image, Pressable } from "react-native";
import { LeftArrow, ThreeDots } from "@/assets/icons/icons";
import { ThemedText } from "../ThemedText";
import { router } from "expo-router";
import { RemotePublicImage } from "../images/RemoteImage";


interface Props {
  name: string
  bucketName: string
  members: string
  path: string
}

export const ChatHeader = ({name, path, members, bucketName }: Props) => {
  return (
    <View className="h-[5rem] flex-row items-center justify-between px-2 pr-6 bg-white">
      <View className="flex-row items-center gap-5">
        <Pressable onPress={() => router.back()} className="px-2">
          <LeftArrow color="gray" />
        </Pressable>
        <RemotePublicImage
          path={path}
          bucketName={bucketName}
          className="w-16 h-16 rounded-full"
        />
        <View>
          <ThemedText type="h3">{name}</ThemedText>
          <ThemedText className="text-gray-500">{members} members</ThemedText>
        </View>
      </View>
      <ThreeDots color="gray" />
    </View>
  );
};
