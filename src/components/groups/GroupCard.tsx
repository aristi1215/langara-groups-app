import { View, Image } from "react-native";
import { ThemedText } from "../ThemedText";
import { CustomButton } from "../CustomButton";
import { supabase } from "@/client/supabase";
import { router } from "expo-router";
import { useAuthContext } from "@/context/AuthContextProvider";
import { useJoinGroups } from "@/api/groups";
import { RemotePublicImage } from "../images/RemoteImage";

interface Props {
  name: string;
  members?: number;
  id: number;
  banner: string
}

export const GroupCard = ({
  name = "random group",
  members = 10,
  id,
  banner
}: Props) => {
  const { user } = useAuthContext();
  const {mutate: joinGroup } = useJoinGroups()


  const handleJoinGroup = (data: {userId: string, groupId: number}) => {
    joinGroup(data, {
      onSuccess: async () => {
        router.push(`/(main)/myGroups/${id}`)
      }
    })
  }

  return (
    <View className={`bg-white rounded-3xl w-[20rem] h-[20rem] p-5 mr-10 gap-2`}>
      <RemotePublicImage
      bucketName="groups-banners"
      path={banner}
      className="w-full h-[12rem] rounded-xl"

      />
      <ThemedText type="h3">{name}</ThemedText>
      <View className="flex-row justify-between items-center">
        <ThemedText type="p">{members} Members</ThemedText>
        <CustomButton
          buttonClassName=" h-[3rem] items-center"
          onPress={() => handleJoinGroup({userId: user.id, groupId: id})}
        >
          JOIN NOW
        </CustomButton>
      </View>
    </View>
  );
};
