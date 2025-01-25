import { View, Image } from "react-native";
import { ThemedText } from "../ThemedText";
import { CustomButton } from "../CustomButton";
import { useEffect, useState } from "react";
import { supabase } from "@/client/supabase";

interface Props {
  name?: string;
  members?: number;
}

export const GroupCard = ({ name = "random group", members = 10 }: Props) => {
  const [imageUrl, setImageUrl] = useState('')
  useEffect(() => {
    const fetchUrl = async () => {
      const { data } = await supabase.storage
        .from("events")
        .getPublicUrl("event-1.jpg");
        setImageUrl(data.publicUrl)
    };

    fetchUrl();
  });
  return (
    <View className={`bg-white rounded-3xl w-[20rem] h-[20rem] p-5 mr-10`}>
      <Image
        // source={imageUrl ? {uri: imageUrl} : require('@/assets/images/langara-logo.png')}
        source={require('@/assets/images/langara-logo.png')}
        className="w-full h-[45%] rounded-2xl"
      />
      <ThemedText type="h3">{name}</ThemedText>
      <View className="flex-row justify-between items-center">
        <ThemedText type="p">{members} Members</ThemedText>
        <CustomButton buttonClassName=" h-[3rem] items-center">
          JOIN NOW
        </CustomButton>
      </View>
    </View>
  );
};
