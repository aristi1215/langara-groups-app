import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContextProvider";
import { router } from "expo-router";
import { supabase } from "@/client/supabase";

const index = () => {
  const { session, loading, user } = useAuthContext();

  //WORK IN PROGRESS, FINISH THE ADMINISTRATOR VALIDATION OF THE DATA

  useEffect(() => {
    if (!loading && !session) {
      router.push("/(auth)/sign-in");
    }
  }, []);

  return (
    <View>
      <Text>Proteted View, ADMIN</Text>
      <Pressable onPress={() => supabase.auth.signOut()}>
        <Text>LOGUEATE AFUERA</Text>
      </Pressable>
    </View>
  );
};

export default index;
