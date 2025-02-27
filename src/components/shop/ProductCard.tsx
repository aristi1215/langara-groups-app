import { View, Image } from "react-native";
import { ThemedText } from "../ThemedText";

export const ProductCard = () => {
  return (
    <View className="rounded-2xl bg-gray-100 items-center p-1 shadow-[0px_6px_2px_0px_rgba(0,0,0,1)] h-[23rem]">
      <Image source={require("@/assets/images/products/product-2.png")} className="m-2" />
        <ThemedText className="self-start">
            Men's harringtong jacket
        </ThemedText>
        <ThemedText className="self-start font-bold text-lg">
            $148.00
        </ThemedText>
    </View>
  );
};
