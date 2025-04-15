import { View, Text, Image } from "react-native";
import React from "react";
import { ThemedText } from "../ThemedText";

export const EventCard = () => {
  return (
    <View className="">
      <Image />
      <View>
        <Text>Designers meetup 2022</Text>
        <Text>03 October, 22</Text>
      </View>
      <View></View>
      <ThemedText>
        JOIN NOW
      </ThemedText>
    </View>
  );
};
