import { ActivityIndicator, FlatList, TextInput, View } from "react-native";
import React, { useState, useMemo } from "react";
import { AllGroupsCard } from "@/components/groups/AllGroupsCard";
import { ThemedText } from "@/components/ThemedText";
import { SearchInput } from "../../../components/SearchInput";
import { useGroups } from "@/api/groups";
import { ErrorView } from "@/components/ErrorView";

const HeaderComponent = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (text: string) => void;
}) => (
  <View style={{ width: "100%", alignItems: "center", paddingVertical: 10 }}>
    <ThemedText type="h1" className="my-3 self-start">
      All Groups
    </ThemedText>
    <SearchInput
      onChangeText={setSearch}
      value={search}
      placeholder="Search for a specific group"
      className="bg-gray-900"
    />
  </View>
);

const AllGroups = () => {
  const { data, error, isLoading } = useGroups();

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return <ErrorView />;
  }
  if (!data) {
    return (
      <View className="flex-1 justify-center items-center">
        <ThemedText type="h1">No groups found</ThemedText>
      </View>
    );
  }

  const [search, setSearch] = useState("");

  const filteredGroups = () => {
    return search === ""
      ? data
      : data.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <FlatList
      keyboardShouldPersistTaps="handled"
      data={filteredGroups()}
      numColumns={2}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 20,
        padding: 10,
      }}
      ListHeaderComponent={
        <HeaderComponent search={search} setSearch={setSearch} />
      }
      ListHeaderComponentStyle={{ alignSelf: "flex-start", marginLeft: 10 }}
      columnWrapperStyle={{ width: "100%", gap: 20 }}
      renderItem={({ item }) => <AllGroupsCard name={item.name} />}
    />
  );
};

export default AllGroups;
