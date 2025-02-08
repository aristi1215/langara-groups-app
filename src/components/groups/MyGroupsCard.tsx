import { View, Image, Pressable } from "react-native";
import { ThemedText } from "../ThemedText";
import { CustomButton } from "../CustomButton";
import { router } from "expo-router";

interface Props {
    name: string
    members?: number
    id: number
}

export const MyGroupsCard = ({name, members=10, id}: Props) => {
  return (
    <Pressable onPress={() => router.push(`/main/myGroups/${id}`)} >
    <View className={`bg-white rounded-3xl w-[22rem] h-[20rem] p-5`} >
      <Image
        // source={imageUrl ? {uri: imageUrl} : require('@/assets/images/langara-logo.png')}
        source={require("@/assets/images/langara-logo.png")}
        className="w-full h-[80%]"
      />
      <ThemedText type="h3">{name}</ThemedText>
      <View className="flex-row justify-between items-center">
        <ThemedText type="p">{members} Members</ThemedText>
        <CustomButton
          buttonClassName=" h-[3rem] items-center"
        >
          JOIN NOW
        </CustomButton>
      </View>
    </View>
    </Pressable>
  );
};

