import { View, Image, Pressable, PressableProps } from "react-native";
import React from "react";

interface Props extends PressableProps {
  company: "facebook" | "google" | "apple";
}

export const SingInWith = ({ company, ...props }: Props) => {
  
  const logos = {
    facebook: require("../assets/images/logo-facebook.png"),
    google: require("../assets/images/logo-google.png"),
    apple: require("../assets/images/logo-apple.png"),
  };

  return (
    <Pressable className="border border-gray-300 rounded-2xl w-28 h-20 justify-center items-center" {...props}>
      <Image source={logos[company]} className="h-20 w-20 bg-transparent"  />
    </Pressable>
  );
};
