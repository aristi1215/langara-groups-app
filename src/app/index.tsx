import { ActivityIndicator } from "react-native";
import { useLocalAsyncStorage } from "@/hooks/useLocalAsyncStorage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

export default function index() {
    const { getItem } = useLocalAsyncStorage("ONBOARDING_VIEWED");
    const [onboardingViewed, setOnboardingViewed] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const checkOnboarding = async () => {
        const item = await getItem();
        setOnboardingViewed(!!item);
        setLoading(false);
      };
      checkOnboarding();
    }, []);
  
    if (loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

  return <Redirect href={onboardingViewed ? "/(auth)/sign-in" : "/(onboarding)"} />;
}
