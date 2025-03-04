import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useGetProductById } from "@/api/products";
import { ThemedText } from "@/components/ThemedText";
import { CustomButton } from "@/components/CustomButton";
import { ErrorView } from "@/components/ErrorView";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductById() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const numberId = parseInt(id);
  const [quantity, setQuantity] = useState(0);
  const { isLoading, data: product, error } = useGetProductById(numberId);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    console.error(error);
    return <ErrorView />;
  }

  return product ? (
    <SafeAreaView className="px-4 justify-start">
      <FlatList
      horizontal={true}
        data={new Array(3)}
        renderItem={() => (
          <Image
            source={require("@/assets/images/products/product-2.png")}
            className="bg-gray-100 h-[20rem] w-auto"
          />
        )}
      />

      <View className="gap-5  bg-blue-500 mt-20">
        <ThemedText type="h2">{product.title}</ThemedText>
        <ThemedText type="h3">{product.price}</ThemedText>
        <ThemedText>{product.description}</ThemedText>
      </View>

      <View className="flex-row bg-[#f4f4f4] rounded-full p-5 justify-between items-center">
        <ThemedText type="h1" className="font-thin">
          Quantity
        </ThemedText>
        <View className="flex-row gap-6 items-center">
          <TouchableOpacity className="w-10 h-10 items-center justify-center bg-primary-default rounded-full">
            <ThemedText>+</ThemedText>
          </TouchableOpacity>
          <ThemedText>{quantity}</ThemedText>
          <TouchableOpacity className="w-10 h-10 items-center justify-center bg-primary-default rounded-full">
            <ThemedText>+</ThemedText>
          </TouchableOpacity>
        </View>
      </View>

      <CustomButton type="orange">Add to bag</CustomButton>
    </SafeAreaView>
  ) : (
    <ErrorView message="Oops, we did not found that product" />
  );
}
