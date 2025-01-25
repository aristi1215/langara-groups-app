import { View, Pressable } from "react-native";
import React, { useEffect, useRef } from "react";
import { ThemedText } from "./ThemedText";
import PagerView from "react-native-pager-view";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalAsyncStorage } from "@/hooks/useLocalAsyncStorage";

type PagerViewRef = React.ElementRef<typeof PagerView>;

export const OnboardingModal = () => {
  const ref = useRef<PagerViewRef>(null);
  const insets = useSafeAreaInsets();
  const { setItem } = useLocalAsyncStorage('ONBOARDING_VIEWED');

  const handleGoToSignUp = () => {
    router.replace("/(auth)/sign-up");
    setItem('ONBOARDING_VIEWED')
  };

  return (
    <View
      className="bg-primary-default fixed h-1/2 w-full rounded-t-[2.5rem] items-center p-10 bottom-0 overflow-hidden"
      style={{ paddingBottom: insets.bottom + 20 }}
    >
      <PagerView
        initialPage={0}
        style={{ width: "100%", height: "100%" }}
        ref={ref}
        collapsableChildren={true}
        collapsable={true}
      >
        <View className="justify-between h-full" key="1">
          <View>
            <ThemedText type="h2" color="white">
              Explore Upcoming and Nearby events
            </ThemedText>
          </View>

          <View>
            <ThemedText className="text-gray-100/70">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              facilis pariatur eum. Laboriosam corporis corrupti ipsam velit
              libero voluptatem nemo consequuntur voluptatibus eligendi nisi id.
            </ThemedText>
          </View>

          <View className="flex-row justify-between w-full">
            <ThemedText className="text-gray-100/60">Skip</ThemedText>
            <View className="flex-row gap-3">
              <Pressable className="bg-white rounded-full h-3 w-3" />
              <Pressable className="bg-white/30 rounded-full h-3 w-3" />
            </View>
            <Pressable onPress={() => ref.current?.setPage(1)}>
              <ThemedText color="white">Next</ThemedText>
            </Pressable>
          </View>
        </View>
        <View className="justify-between h-full" key="2">
          <View>
            <ThemedText type="h2" color="white">
              Explore Upcoming and Nearby events
            </ThemedText>
          </View>

          <View>
            <ThemedText className="text-gray-100/70">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              facilis pariatur eum. Laboriosam corporis corrupti ipsam velit
              libero voluptatem nemo consequuntur voluptatibus eligendi nisi id.
            </ThemedText>
          </View>

          <View className="flex-row justify-between w-full">
            <ThemedText className="text-gray-100/60">Skip</ThemedText>
            <View className="flex-row gap-3">
              <Pressable className={`bg-white/30 rounded-full h-3 w-3`} />
              <Pressable className="bg-white rounded-full h-3 w-3" />
            </View>
            <Pressable onPress={handleGoToSignUp}>
              <ThemedText color="white">Next</ThemedText>
            </Pressable>
          </View>
        </View>
      </PagerView>
    </View>
  );
};
