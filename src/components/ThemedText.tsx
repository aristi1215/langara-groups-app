import { Text, TextProps } from "react-native";

interface Props extends TextProps {
  type?: "h1" | "h2" | "h3" | "p" | "small";
  className?: string;
  color?: "black" | "white";
}

export const ThemedText = ({
  children,
  type = "p",
  className,
  color = "black",
}: Props) => {
  const textStyles = {
    h1: "font-adelle-bold text-3xl",
    h2: "font-adelle-semibold text-2xl",
    h3: "font-adelle-semibold text-xl",
    p: "font-adelle-regular text-lg",
    small: "font-adelle-light text-sm",
  }[type];

  return (
    <Text
      className={` ${textStyles} ${
        color === "black" ? "text-black" : "text-white"
      } ${className}`}
    >
      {children}
    </Text>
  );
};
