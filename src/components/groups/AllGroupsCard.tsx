import { View, Image, TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";

export const AllGroupsCard = ({ name }: { name: string }) => {
  return (
    <TouchableOpacity className="self-start bg-gray-200 w-[12rem] h-[18rem] justify-center items-center rounded-2xl">
      <ThemedText type="h2" className="absolute z-40 text-white text-center">{name}</ThemedText>
      <View className="w-full h-full absolute bg-black/30 top-0 left-0 z-20 rounded-xl"></View>
      <Image source={require("@/assets/images/products/product-2.png")} />
    </TouchableOpacity>
  );
};
