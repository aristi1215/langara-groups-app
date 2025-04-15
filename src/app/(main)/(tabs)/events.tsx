import { FlatList, ScrollView, View } from "react-native";
import React from "react";
import { SearchInput } from "@/components/SearchInput";
import { ThemedText } from "@/components/ThemedText";
import { FilterIcon } from "@/assets/icons/icons";
import { EventCard } from "@/components/events/EventCard";

export default function events() {
  const events = new Array(10).fill({
    name: "Designers meetup 2022",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos neque tenetur facilis totam, a quibusdam rerum soluta consectetur beatae dolor",
    date: '03 October, 22'
  });
  return (
    <View className="flex-1">
      <View className="bg-primary-default p-10 rounded-b-[3rem] items-center">
        <ThemedText className="text-center mb-3" color="white" type="h1">
          Events
        </ThemedText>
        <View className="flex-row px-5 gap-3">
          <SearchInput placeholder="Search for events" />
          <View className="py-2 px-3 bg-white rounded-xl flex items-center justify-center">
            <FilterIcon size={25} />
          </View>
        </View>
      </View>
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: 20,
          marginTop: 20,
          gap: 10,
          paddingBottom: 30,
        }}
        data={events}
        renderItem={({item}) => <EventCard name={item.name} date={item.date} description={item.description} />}
      />
    </View>
  );
}
