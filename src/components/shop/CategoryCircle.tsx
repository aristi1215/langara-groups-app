import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import { RemotePublicImage } from "../images/RemoteImage";
import { Link } from "expo-router";

interface Props {
    image: string
    categoryId: number,
    name: string,
    bucketName: string,
    className?: string,
    ImageClassName?: string
}

export const CategoryCircle = ({image, categoryId, name, bucketName, className, ImageClassName}: Props) => {
  return (
    <Link href={`/shop/(category)/${categoryId}?categoryName=${name}`}>
    <View className={className}>
      <RemotePublicImage path={image} className={`h-20 w-20 ${ImageClassName}`} bucketName={bucketName} />
      <ThemedText className="text-center">{name}</ThemedText>
    </View>
    </Link>
  );
};
