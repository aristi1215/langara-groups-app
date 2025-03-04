import { View, Image, Pressable } from "react-native";
import { ThemedText } from "../ThemedText";
import { CustomButton } from "../CustomButton";
import { router } from "expo-router";
import { RemotePublicImage } from "../images/RemoteImage";

interface Props {
  name: string;
  members?: number;
  id: number;
  banner: string;
}

export const MyGroupsCard = ({ name, members = 10, id, banner }: Props) => {
  return (
    <Pressable onPress={() => router.push(`/(main)/myGroups/${id}`)}>
      <View className={`bg-white rounded-3xl w-[22rem] h-[20rem] p-5 pb-10`}>
        <RemotePublicImage path={banner} bucketName="groups-banners" className="h-[10rem] w-full" />
        <ThemedText type="h3">{name}</ThemedText>
        <View className="flex-row justify-between items-center">
          <ThemedText type="p">{members} Members</ThemedText>
        </View>
      </View>
    </Pressable>
  );
};
