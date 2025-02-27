import { View, ScrollView, ActivityIndicator } from "react-native";
import { ShopBag, UserIcon } from "@/assets/icons/icons";
import { SearchInput } from "@/components/SearchInput";
import { ThemedText } from "../../../components/ThemedText";
import { ProductCard } from "@/components/shop/ProductCard";
import { CategoryCircle } from "@/components/shop/CategoryCircle";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useProductCategories } from "@/api/product_categories";

export default function index() {
  const { isLoading, data: productCategories, error } = useProductCategories();

  if(error){
    console.error('error fetching the categories')
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
          {
          
          productCategories ? 

          productCategories?.map((category) => (
            <CategoryCircle
              image={category.image}
              category={category.name}
              key={category.name}
            />
          ))
          : isLoading ? <View className="w-full items-center justify-center">
            <ActivityIndicator/>
          </View>
          : <View></View>
        }
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
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              gap: 20,
              paddingHorizontal: 6,
              paddingVertical: 6,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <ProductCard />
            <ProductCard />
          </ScrollView>
          <View className="flex-row justify-between my-4 w-full">
            <ThemedText type="h2">Top selling</ThemedText>
            <ThemedText type="h3">See All</ThemedText>
          </View>
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              gap: 20,
              paddingHorizontal: 6,
              paddingVertical: 3,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <ProductCard />
            <ProductCard />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
