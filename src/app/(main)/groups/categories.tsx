import { useGetGroupsCategories } from "@/api/group-categories";
import CategoryCard from "@/components/CategoryCard";
import { ThemedText } from "@/components/ThemedText";
import { View, Text, FlatList } from "react-native";

const AllCategories = () => {
  const { data } = useGetGroupsCategories();

  return (
    <View className="mx-8">
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <ThemedText type="h1" className="mb-6">
            Search by category
          </ThemedText>
        )}
        contentContainerStyle={{ gap: 10, paddingVertical: 20 }}
        renderItem={({ item }) => (
          <CategoryCard
            path={item.image}
            bucketName="groups-categories"
            name={item.name}
          />
        )}
      />
    </View>
  );
};

export default AllCategories;
