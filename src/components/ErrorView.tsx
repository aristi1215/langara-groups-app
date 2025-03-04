import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
import { router } from "expo-router";

export const ErrorView = ({ message }: { message?: string }) => {
  return (
    <View className="flex-1 justify-center items-center">
      {message ? (
        <ThemedText type="h1">Oops, an error has occurred</ThemedText>
      ) : (
        <ThemedText type="h1">{message}</ThemedText>
      )}

      <TouchableOpacity onPress={() => router.back()}>
        <ThemedText type="h3">Go back</ThemedText>
      </TouchableOpacity>
    </View>
  );
};
