import { View, TextInput, TextInputProps } from "react-native";
import React from "react";
import { SearchIcon } from "../assets/icons/icons";

interface Props extends TextInputProps  {
  className?: string
  searchIconColor?: string
}

export const SearchInput = ({ className, placeholderTextColor='white', searchIconColor='white', placeholder }: Props) => {
  return (
    <View className="flex-row items-center">
      <SearchIcon size={20} className="absolute ml-5" color={searchIconColor} />
      <TextInput
        className={`bg-gray-200/20 w-full rounded-xl pl-14 h-14 ${className}`}
        placeholder={placeholder}
        placeholderTextColor={ placeholderTextColor}
      />
    </View>
  );
};
