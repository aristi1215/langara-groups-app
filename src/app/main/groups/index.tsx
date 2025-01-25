import { View, TextInput, FlatList, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { SearchIcon } from "@/assets/icons/icons";
import { UserIcon } from "@/assets/icons/icons";
import { GroupCard } from "@/components/groups/GroupCard";
import { SmallGroupCard } from "@/components/groups/SmallGroupCard";
import { supabase } from "@/client/supabase";
import { ActivityIndicator } from "react-native";


export default function Index() {

  const [groupsData, setGroupsData] = useState<any[] | null>([])

  useEffect(() => {
    const fetchGroups = async () => {
      const {data, error} = await supabase.from('groups').select('*')
      if(error) {console.error(error)}
      setGroupsData(data)
    }
    fetchGroups()
  },[])

  return (

    groupsData ? (

    <ScrollView
      className="flex-1"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Fondo superior */}
      <View className="absolute top-0 left-0 w-full h-[20rem] bg-black/80" />

      {/* Encabezado */}
      <View className="px-10 pt-7">
        <View className="flex-row items-center mb-5 gap-4">
          <UserIcon size={40} color="white" />
          <View>
            <ThemedText className="text-white">Hi, welcome</ThemedText>
            <ThemedText className="text-white">Juan Pablo</ThemedText>
          </View>
        </View>

        {/* Barra de búsqueda */}
        <View className="flex-row items-center">
          <SearchIcon size={20} className="absolute ml-5" color="white" />
          <TextInput
            className="bg-gray-200/20 w-full rounded-xl pl-14 h-14"
            placeholder="Find your preferred groups"
            placeholderTextColor={"white"}
          />
        </View>
      </View>

      {/* Sección: Eventos populares */}
      <View className="mt-10">
        <ThemedText type="h1" className="text-white px-10 mb-5">
          Popular groups 🔥
        </ThemedText>
        <FlatList
          className="pl-10"
          data={groupsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <GroupCard name={item.name} />}
        />
      </View>

      {/* Sección: Otros elementos */}
      <View className="mt-10 px-10 items-center ">
        <View className="w-full flex-row justify-between">
          <ThemedText type="h2" className="text-black mb-5">
            Choose by category
          </ThemedText>
          <Pressable>
            <ThemedText type="p" className="text-primary-default" >View All</ThemedText>
          </Pressable>
        </View>
        {groupsData.map((item, index) => (
          <SmallGroupCard key={index} name={item.name} />
        ))}
      </View>
    </ScrollView>
    ) : (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    )

  );
}
