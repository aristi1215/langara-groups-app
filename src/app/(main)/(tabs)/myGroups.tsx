import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import { useAuthContext } from "@/context/AuthContextProvider";
import { useUserGroups } from "../../../api/groups/index";
import { MyGroupsCard } from "@/components/groups/MyGroupsCard";
import { ErrorView } from "@/components/ErrorView";

export default function MyGroupsScreen() {
  const { user } = useAuthContext();
  const { data, isError, error, isLoading } = useUserGroups(user.id);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  if (isError) {
    console.error(error);
    return <ErrorView />;
  }

  return (
    <FlatList
      data={data}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
        paddingVertical: 20,
      }}
      renderItem={({ item }) => <MyGroupsCard name={item.name} id={item.id} banner={item.banner_path} />}
    />
  );
}
