import { View, Image } from "react-native";
import { ShopBag, UserIcon } from "@/assets/icons/icons";
import { SearchInput } from "@/components/SearchInput";
import { ThemedText } from "../../../components/ThemedText";
import { Star } from "@/assets/icons/icons";
import Index from "./groups";

export default function index() {
  const categories = ["", "", "", "", "", ""];
  return (
    <View className="px-8">
      <View className="flex-row justify-between px-5 items-center">
        <UserIcon color="orange" />
        <ShopBag color="orange" />
      </View>

      <SearchInput bgColor="bg-black-800" className="bg-gray-700/50" />

      <View className="flex-row justify-between">
        <ThemedText>Categories</ThemedText>
        <ThemedText>See All</ThemedText>
      </View>
      <View className="flex-row justify-evenly">
        {categories.map((category, Index) => (
          <Star key={`i-${Index}`} />
        ))}
      </View>

      <View className="flex-row justify-between">
        <ThemedText type="h3">Top selling</ThemedText>
        <ThemedText type="h3">See All</ThemedText>
      </View>

      <View className="">
        <View className="flex-row justify-evenly">
          <Image
            source={require("@/assets/images/products/comp-shirt.webp")}
            className="w-32 h-32"
          />
          <Image
            source={require("@/assets/images/products/comp-shirt.webp")}
            className="w-32 h-32"
          />
          <Image
            source={require("@/assets/images/products/comp-shirt.webp")}
            className="w-32 h-32"
          />
        </View>
        <View className="flex-row justify-evenly">
          <Image
            source={require("@/assets/images/products/comp-shirt.webp")}
            className="w-32 h-32"
          />
          <Image
            source={require("@/assets/images/products/comp-shirt.webp")}
            className="w-32 h-32"
          />
          <Image
            source={require("@/assets/images/products/comp-shirt.webp")}
            className="w-32 h-32"
          />
        </View>
        <View className="flex-row justify-evenly">
          <Image
            source={require("@/assets/images/products/comp-shirt.webp")}
            className="w-32 h-32"
          />
          <Image
            source={require("@/assets/images/products/comp-shirt.webp")}
            className="w-32 h-32"
          />
          <Image
            source={require("@/assets/images/products/comp-shirt.webp")}
            className="w-32 h-32"
          />
        </View>
        <View className="flex-row justify-evenly">
          <Image
            source={require("@/assets/images/products/comp-shirt.webp")}
            className="w-32 h-32"
          />
          <Image
            source={require("@/assets/images/products/comp-shirt.webp")}
            className="w-32 h-32"
          />
          <Image
            source={require("@/assets/images/products/comp-shirt.webp")}
            className="w-32 h-32"
          />
        </View>
      </View>
    </View>
  );
}
