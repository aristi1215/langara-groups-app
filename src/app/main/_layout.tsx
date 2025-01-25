import { useAuthContext } from "@/context/AuthContextProvider";
import { router, Tabs } from "expo-router";
import { useEffect } from "react";

export default function TabsLayout() {
  const { session, loading } = useAuthContext();

  useEffect(() => {
    if (!session && !loading) {
      router.push("/(auth)/sign-in");
    }
  }, [session, loading]);

  return (
    <Tabs>
      <Tabs.Screen name="groups/index" options={{ headerShown: false }} />
      <Tabs.Screen name="events/index" />
      <Tabs.Screen name="index" options={{href: null}} />
    </Tabs>
  );
}
