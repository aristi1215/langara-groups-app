import { View, Text, Pressable } from "react-native";
import React from "react";
import { supabase } from "@/client/supabase";

export default function index() {
  return (
    <View>
      <Pressable onPress={() => supabase.auth.signOut()}>
        <Text>logout</Text>
      </Pressable>
    </View>
  );
}
