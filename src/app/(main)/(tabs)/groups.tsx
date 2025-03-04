import { View, TextInput, FlatList, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { SearchIcon } from "@/assets/icons/icons";
import { UserIcon } from "@/assets/icons/icons";
import { GroupCard } from "@/components/groups/GroupCard";
import { SmallGroupCard } from "@/components/groups/SmallGroupCard";
import { ActivityIndicator } from "react-native";
import { useGroups } from "@/api/groups";
import { Link, router } from "expo-router";
import { SearchInput } from "@/components/SearchInput";
import { CategoryCircle } from "@/components/shop/CategoryCircle";

export default function Index() {
  const { data: groupsData, error, isError, isLoading } = useGroups();

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
        <Link href={"/(main)/(tabs)/groups"}>Go back</Link>
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View className="absolute top-0 left-0 w-full h-[20rem] bg-black shadow-lg" />

      <View className="px-10 pt-7">
        <View className="flex-row items-center mb-10 gap-4">
          <UserIcon size={40} color="white" />
          <View>
            <ThemedText className="text-white">Hi, welcome</ThemedText>
            <ThemedText className="text-white">Juan Pablo</ThemedText>
          </View>
        </View>
      </View>

      <View className="">
        <ThemedText type="h1" className="text-white px-10 mb-5">
          Popular groups 🔥
        </ThemedText>
        <FlatList
          className="pl-10"
          data={groupsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <GroupCard
              name={item.name}
              id={item.id}
              banner={item.banner_path}
            />
          )}
        />
      </View>

      <View className="mt-10 px-10 items-center">
        <View className="w-full">
          <View className="w-full flex-row justify-between">
            <ThemedText type="h2" className="text-black mb-5">
              Choose by category
            </ThemedText>
            <Pressable
              onPress={() => router.push("/(main)/groups/AllCategories")}
            >
              <ThemedText type="h3" className="text-primary-default">
                View All
              </ThemedText>
            </Pressable>
          </View>
        </View>
      </View>
      <FlatList
        data={groupsData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          marginBottom: 30,
          paddingLeft: 20,
          paddingRight: 10,
        }}
        renderItem={({ item }) => (
          <CategoryCircle
            key={item.id}
            image={item.banner_path}
            name={item.name}
            categoryId={1}
            bucketName="groups-banners"
            ImageClassName="rounded-full"
            className="items-center mx-2 w-[7rem]"
          />
        )}
      />
      <View className="px-6">
        <View className="flex-row justify-between mb-6">
          <ThemedText type="h2">Recommended groups</ThemedText>
          <ThemedText type="h3" className="text-primary-default">
            See all
          </ThemedText>
        </View>
        {groupsData?.map((item) => (
          <SmallGroupCard
            key={item.id}
            name={item.name}
            banner={item.banner_path}
            bucketName="groups-banners"
            description={item.description}
          />
        ))}
      </View>
    </ScrollView>
  );
}
