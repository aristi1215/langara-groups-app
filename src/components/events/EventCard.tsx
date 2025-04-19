import { View, Text, Image } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";
import { Link } from "expo-router";

interface Props {
  name: string;
  description: string;
  date: string;
}

export const EventCard = ({ name, description, date }: Props) => {
  const eventInformation = JSON.stringify({name,description: description.substring(0,150)+'...',date})
  return (
    <Link href={`/events/${eventInformation}`}>
      <View className="flex-row items-center gap-4 bg-white rounded-2xl h-32 w-full">
        <Image
          className="w-[35%] h-full rounded-xl"
          source={require("@/assets/images/splash-icon.png")}
          resizeMode="cover"
          resizeMethod="scale"
        />
        <View>
          <ThemedText className="font-bold" adjustsFontSizeToFit>
            {name}
          </ThemedText>
          <ThemedText type="p" adjustsFontSizeToFit>
            {date}
          </ThemedText>
        </View>
      </View>
    </Link>
  );
};
