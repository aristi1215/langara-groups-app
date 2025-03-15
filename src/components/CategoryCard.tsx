import { View, Text } from "react-native";
import React from "react";
import { RemotePublicImage } from "./images/RemoteImage";
import { ThemedText } from "./ThemedText";

interface Props {
    path: string,
    bucketName: string,
    name: string
}

const CategoryCard = ({ path, bucketName, name }: Props) => {
  return (
    <View className="flex-row bg-gray-200 items-center rounded-xl h-[6rem] justify-between">
      <ThemedText type="h3" className="ml-4">{name}</ThemedText>
      <RemotePublicImage path={path} bucketName={bucketName} className="w-[50%] h-full bg-gray-400 rounded-r-xl" resizeMode="cover" />
    </View>
  );
};

export default CategoryCard;
