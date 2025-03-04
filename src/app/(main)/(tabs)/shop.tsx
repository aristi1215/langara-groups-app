import { View, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { ShopBag, UserIcon } from "@/assets/icons/icons";
import { SearchInput } from "@/components/SearchInput";
import { ThemedText } from "../../../components/ThemedText";
import { ProductCard } from "@/components/shop/ProductCard";
import { CategoryCircle } from "@/components/shop/CategoryCircle";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useProductCategories } from "@/api/product_categories";
import { useGetProducts } from "@/api/products";

export default function index() {
  const { isLoading, data: productCategories, error } = useProductCategories();
  const { data: products } = useGetProducts();

  if (error) {
    console.error("error fetching the categories");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className="px-4 pt-8 flex-1">
        <View className="flex-row justify-between items-center mb-6">
          <UserIcon color="gray" />
          <ShopBag color="gray" />
        </View>

        <SearchInput
          placeholderTextColor="black"
          searchIconColor="black"
          className="bg-gray-600/10"
          placeholder="Search"
        />

        <View className="flex-row justify-between mt-5">
          <ThemedText type="h2">Categories</ThemedText>
          <ThemedText type="h3">See All</ThemedText>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            gap: 10,
            marginVertical: 10,
            paddingBottom: 60,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {productCategories ? (
            productCategories?.map((category) => (
              <CategoryCircle
                image={category.image}
                categoryId={category.id}
                name={category.name}
                bucketName="product-categories"
                key={category.name}
              />
            ))
          ) : isLoading ? (
            <View className="w-full items-center justify-center">
              <ActivityIndicator />
            </View>
          ) : (
            <View className="w-full items-center">
              <ThemedText type="h3" className="text-center">
                No categories found
              </ThemedText>
            </View>
          )}
        </ScrollView>

        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            gap: 10,
            paddingVertical: 10,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-row justify-between my-4 w-full">
            <ThemedText type="h2">Top selling</ThemedText>
            <ThemedText type="h3">See All</ThemedText>
          </View>
          <FlatList
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              gap: 20,
              paddingHorizontal: 6,
              paddingVertical: 6,
            }}
            data={products}
            renderItem={({ item }) => (
              <ProductCard
                title={item.title}
                price={item.price}
                productId={item.id}
                path="product-1.png"
                bucketName="products"
              />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          <View className="flex-row justify-between my-4 w-full">
            <ThemedText type="h2">New In</ThemedText>
            <ThemedText type="h3">See All</ThemedText>
          </View>
          <FlatList
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              gap: 20,
              paddingHorizontal: 6,
              paddingVertical: 6,
            }}
            data={products}
            renderItem={({ item }) => (
              <ProductCard
                title={item.title}
                price={item.price}
                productId={item.id}
                path="product-1.png"
                bucketName="products"
              />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
