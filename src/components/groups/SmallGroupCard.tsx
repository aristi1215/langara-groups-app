import { View, Image, Pressable, Text } from "react-native";
import { ThemedText } from "../ThemedText";
import { CustomButton } from "../CustomButton";

interface Props {
  name?: string;
  members?: number;
}

export const SmallGroupCard = ({
  name = "random group",
  members = 10,
}: Props) => {
  return (
    <View className="bg-white rounded-3xl w-full h-[7rem] p-5 mb-10 flex-row justify-between items-center">
      <Image
        source={require("@/assets/images/langara-logo.png")}
        className="w-20 h-[45%] rounded-2xl"
      />
      <ThemedText type="h3" className="w-[30%] leading-none" adjustsFontSizeToFit>
        {name}
      </ThemedText>
      <View className="justify-between items-center w-[30%]">
        <ThemedText className="text-center text-primary-default leading-none" type="p" adjustsFontSizeToFit >
          {members} Members
        </ThemedText>
        <Pressable >
          <ThemedText className="active:text-black/50 ">JOIN NOW</ThemedText>
        </Pressable>
      </View>
    </View>
  );
};
