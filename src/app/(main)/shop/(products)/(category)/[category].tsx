import { ActivityIndicator, FlatList, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { useGetProductByCategory } from "@/api/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { ErrorView } from "@/components/ErrorView";

export default function ProductByCategory() {
  const { category, categoryName } = useLocalSearchParams<{
    category: string;
    categoryName: string;
  }>();

  const categoryId = parseInt(category);
  const { isLoading, data, error } = useGetProductByCategory(categoryId);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    console.error(error);
    <ErrorView />;
  }

  return (
    <View className="items-center">
      <FlatList
      showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "flex-start",
          justifyContent: 'center',
          paddingVertical: 20,
          gap: 10,
        }}
        columnWrapperStyle={{ gap: 10 }}
        ListHeaderComponentStyle={{ alignSelf: "flex-start", marginLeft: 10 }}
        ListHeaderComponent={() => (
          <ThemedText type="h1">{categoryName}</ThemedText>
        )}
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <ProductCard title={item.products.title} price={item.products.price} />
        )}
      />
    </View>
  );
}
