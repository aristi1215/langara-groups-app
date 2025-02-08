import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import { useAuthContext } from "@/context/AuthContextProvider";
import { useUserGroups } from "../../../api/groups/index";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { MyGroupsCard } from "@/components/groups/MyGroupsCard";

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
    return (
      <View className="flex-1 items-center justify-center">
        <ThemedText type="h2">Sorry, and error has occurred</ThemedText>
        <Link href={"/main/myGroups"}>Go back</Link>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
        marginTop: 20,
      }}
      renderItem={({ item }) => <MyGroupsCard name={item.name} id={item.id} />}
    />
  );
}
