import { View, Text, TextInput } from "react-native";
import React from "react";
import { SearchIcon } from "../assets/icons/icons";

export const SearchInput = ({bgColor, className}: {bgColor?: string, className?: string}) => {
  return (
    <View className="flex-row items-center">
      <SearchIcon size={20} className="absolute ml-5" color="white" />
      <TextInput
        className={`bg-gray-200/20 w-full rounded-xl pl-14 h-14 ${className}`}
        placeholder="Find your preferred groups"
        placeholderTextColor={"white"}
      />
    </View>
  );
};
