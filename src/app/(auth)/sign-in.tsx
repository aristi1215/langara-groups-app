import { View, Switch, Pressable, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { CustomInput } from "@/components/CustomInput";
import { Link, router } from "expo-router";
import { CustomButton } from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthContext } from "@/context/AuthContextProvider";
import GoogleButtonSignIn from '@/components/Auth/GoogleSignIn'

export default function SignIn() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signInWithPassword, session, loading, user, authError } =
    useAuthContext();

  useEffect(() => {
    if (session && !loading && user?.type === "user") {
      router.replace("/main/groups");
    } else if (session && !loading && user?.type === "admin") {
      router.replace("/admin/groups");
    }
  }, [loading, session, user]);

  const toggleSwitch = () => setIsEnabled(!isEnabled);

  const handleSignIn = async () => {
    try {
      await signInWithPassword(email, password);
    } catch (e) {
      console.error(e);
    }
  };

  return (

    loading ? <View className='flex-1 items-center justify-center'>
      <ActivityIndicator/>
    </View> :
   ( <SafeAreaView className="p-4 h-full justify-start">
      <View className=" gap-4">
        <ThemedText type="p" className="text-gray-500 ml-2 mb-2">
          Give credentials to sign in your account
        </ThemedText>
        <CustomInput
          textContentType="emailAddress"
          maxLength={50}
          placeholder="Type your email"
          icon="envelope-o"
          onChangeText={(text) => setEmail(text)}
        />
        <CustomInput
          textContentType="emailAddress"
          maxLength={20}
          placeholder="Type your password"
          icon="envelope-o"
          isPassword
          onChangeText={(text) => setPassword(text)}
        />
        {authError ? (
          <ThemedText className="text-red-500">{authError}</ThemedText>
        ) : (
          ""
        )}

        <View className="flex-row items-center justify-between mr-2">
          <View className="flex-row items-center">
            <Switch
              trackColor={{ false: "#767577", true: "#e75425" }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <ThemedText>Remember me</ThemedText>
          </View>

          <Link
            href={"/"}
            className="text-primary-default font-adelle-semibold"
          >
            <ThemedText type="p" className="text-primary-default">
              Forgot Password?
            </ThemedText>
          </Link>
        </View>

        <CustomButton
          buttonClassName="mt-10"
          onPress={handleSignIn}
          disabled={loading}
        >
          SIGN IN
        </CustomButton>
      </View>

      <View className="justify-between mt-20 gap-10">
        <View className="flex-row justify-around w-full items-center gap-2">
          <View className="h-[.6px] w-[33%] bg-gray-400"></View>
          <ThemedText className="text-center">Or continue with</ThemedText>
          <View className="h-[.6px] w-[33%] bg-gray-400"></View>
        </View>

        <View className="flex-row w-full justify-evenly">
          <GoogleButtonSignIn />
        </View>

        <View className="flex-row justify-center">
          <ThemedText type="p" className="text-center text-lg">
            Don't have an account?{" "}
          </ThemedText>
          <Pressable onPress={() => router.push("/(auth)/sign-up")}>
            <ThemedText type="p" className=" text-lg text-primary-default">
              Sign Up
            </ThemedText>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>)
  );
}
