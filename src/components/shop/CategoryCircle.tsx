import { View, Image } from "react-native";
import { ThemedText } from "../ThemedText";
import { RemotePublicImage } from "../RemoteImage";

interface Props {
    image: string
    category: string
}

export const CategoryCircle = ({image, category}: Props) => {
  return (
    <View className="">
      <RemotePublicImage path={image} className="h-20 w-20" />
      <ThemedText>{category}</ThemedText>
    </View>
  );
};
