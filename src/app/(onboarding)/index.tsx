import { Image } from "react-native";
import React from "react";
import { OnboardingModal } from "@/components/OnboardingModal";
import { StatusBar } from "expo-status-bar";

export default function OnboardingIndex() {
  return (
    <>
      <StatusBar hidden />
      <Image
        source={require("../../assets/images/onboarding-1.jpg")}
        className="aspect-square w-full max-h-[50%]"
      />
      <OnboardingModal />
    </>
  );
}
