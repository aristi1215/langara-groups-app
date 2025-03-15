import {
  View,
  FlatList,
  TextInput,
  Text,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Tabs, useLocalSearchParams } from "expo-router";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { Messages } from "../../../components/chat/Messages";
import { Clip, Picture, Face, SendMessage } from "@/assets/icons/icons";
import { useInsertMessage, useReadMessages } from "@/api/messages";
import { useAuthContext } from "@/context/AuthContextProvider";
import { useSubscribeToMessages } from "../../../api/messages/index";
import { ErrorView } from "@/components/ErrorView";

///MANEJAR ESTADOS DE ERROR Y DE CARGUILLA

export default function ChatGroup() {
  const { id: groupId, name, banner, members } = useLocalSearchParams();

  console.log(name, banner, members);

  const groupIdNumber = parseInt(Array.isArray(groupId) ? groupId[0] : groupId);
  const bannerString = Array.isArray(banner) ? banner[0] : banner
  const memberString = Array.isArray(members) ? members[0] : members
  const [messageText, setMessageText] = useState("");
  const { isLoading, data, error, isError } = useReadMessages(groupIdNumber);
  const { mutate: insertMessage } = useInsertMessage();
  const { user } = useAuthContext();

  const groupName = "Computer Science Club";

  //Used to receive changes from the database
  useSubscribeToMessages();

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }

  if (isError) {
    console.error(error);
    return (
      <ErrorView message="Oops, an error has occurred reading the messages" />
    );
  }

  return (
    <View>
      <Tabs.Screen
        options={{
          header: () => <ChatHeader name={groupName} bucketName={'groups-banners'} path={bannerString} members={memberString} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <FlatList
        className="px-8 pt-8 mb-[12rem]"
        contentContainerStyle={{
          gap: 10,
          paddingBottom: 40,
          minHeight: "100%",
        }}
        data={data}
        renderItem={({ item }) => {
          return (
            <Messages
              isMine={item.user_id === user.id ? true : false}
              message={item.message}
              userId={item.user_id}
            />
          );
        }}
      />
      <View className="flex-row absolute bottom-[5rem] h-[7rem] w-full bg-gray-150 items-center justify-between px-3">
        <TextInput
          className="w-[70%] rounded-full py-3 bg-white px-4"
          placeholder="Write a reply..."
          onChangeText={(e) => setMessageText(e)}
          value={messageText}
        />
        <View className={`flex-row ${messageText ? "mr-3 gap-6" : "gap-6"}`}>
          <Face size={20} color="gray" />
          {messageText ? (
            <Pressable
              onPress={() => {
                setMessageText("");
                insertMessage({
                  group_id: groupIdNumber,
                  message: messageText,
                  user_id: user.id,
                });
              }}
            >
              <SendMessage size={25} color="gray" />
            </Pressable>
          ) : (
            <>
              <Clip size={20} color="gray" />
              <Picture size={20} color="gray" />
            </>
          )}
        </View>
      </View>
    </View>
  );
}
