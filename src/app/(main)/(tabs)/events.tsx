import { FlatList, Pressable, ScrollView, View } from "react-native";
import React, { useState } from "react";
import { SearchInput } from "@/components/SearchInput";
import { ThemedText } from "@/components/ThemedText";
import { FilterIcon } from "@/assets/icons/icons";
import { EventCard } from "@/components/events/EventCard";
import {
  useGetPastEvents,
  useGetUpcommingEvents,
} from "../../../api/events/index";
import { LoadingView } from "@/components/LoadingView";
import { useAuthContext } from "@/context/AuthContextProvider";

export default function events() {
  const { session } = useAuthContext();
  const [selectedView, setSelectedView] = useState<"past" | "upcoming">(
    "upcoming"
  );

  if (!session) {
    return;
  }
  const {
    data: pastEvents,
    error,
    isLoading,
  } = useGetPastEvents(session?.user.id);
  const {
    data: upcommingEvents,
    error: upcommingError,
    isLoading: upcommingEventLoading,
  } = useGetUpcommingEvents(session?.user.id);

  const getEventsData = () => {
    selectedView == "past" ? events : events;
  };

  if (isLoading) {
    return <LoadingView />;
  }

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
      <View className="flex-row items-center justify-center gap-10 p-4 mt-4 bg-gray-300/50 rounded-2xl mx-4 h-20 relative">
        <View
          className={`w-[55%] h-14 absolute bg-white rounded-xl left-2 ${
            selectedView == "past" ? "translate-x-[90%]" : "translate-x-0"
          } transition-all duration-200 ease-linear`}
        ></View>
        <Pressable
          className="rounded-xl w-[40%]"
          onPress={() => setSelectedView("upcoming")}
        >
          <ThemedText
            className={`text-center font-semibold  ${
              selectedView == "upcoming"
                ? "text-primary-default"
                : "text-gray-400"
            } `}
          >
            UPCOMMING
          </ThemedText>
        </Pressable>
        <Pressable className="w-[40%]" onPress={() => setSelectedView("past")}>
          <ThemedText
            className={`text-center font-semibold ${
              selectedView == "past" ? "text-primary-default" : "text-gray-400"
            } `}
          >
            PAST EVENTS
          </ThemedText>
        </Pressable>
      </View>

      {selectedView == "past" ? (
        <FlatList
          contentContainerStyle={{
            paddingHorizontal: 20,
            marginTop: 20,
            gap: 10,
            paddingBottom: 30,
          }}
          data={pastEvents}
          renderItem={({ item }) => {
            return (
              <EventCard
                name={item.name}
                date={item.date}
                description={item.description}
              />
            );
          }}
        />
      ) : (
        <FlatList
        contentContainerStyle={{
          paddingHorizontal: 20,
          marginTop: 20,
          gap: 10,
          paddingBottom: 30,
        }}
        data={upcommingEvents}
        renderItem={({ item }) => {
          return (
            <EventCard
              name={item.name}
              date={item.date}
              description={item.description}
            />
          );
        }}
      />
      )}
    </View>
  );
}
