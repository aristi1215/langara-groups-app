import { View, TextInputProps } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Props extends TextInputProps {
  icon?: keyof typeof FontAwesome.glyphMap;
  textContentType: TextInputProps["textContentType"];
  autoComplete?: TextInputProps["autoComplete"];
  maxLength: number;
  placeholder: string;
  viewClassName?: string;
  isPassword?: boolean;
}

export const CustomInput = ({
  icon,
  textContentType,
  autoComplete,
  placeholder,
  maxLength,
  viewClassName,
  className,
  isPassword = false,
  ...props
}: Props) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  return isPassword ? (
    <View
      className={`border border-gray-400 rounded-2xl flex-row items-center justify-center h-16 px-10 gap-2 ${viewClassName}`}
    >
      <FontAwesome name="lock" size={20} />
      <TextInput
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full ${className}`}
        textContentType="password"
        secureTextEntry={passwordVisible}
        maxLength={maxLength}
        {...props}
      />
      <FontAwesome
        name={passwordVisible ? 'eye-slash' : 'eye'}
        size={20}
        onPress={() => setPasswordVisible(!passwordVisible)}
      />
    </View>
  ) : (
    <View
      className={`border border-gray-400 rounded-2xl flex-row items-center justify-start h-16 px-4 gap-2 ${viewClassName}`}
    >
      <FontAwesome name={icon} size={20} />
      <TextInput
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full ${className}`}
        textContentType={textContentType}
        maxLength={maxLength}
        {...props}
      />
    </View>
  );
};
