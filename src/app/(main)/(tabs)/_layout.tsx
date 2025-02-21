import { useAuthContext } from "@/context/AuthContextProvider";
import { router, Tabs, usePathname } from "expo-router";
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
      <Tabs.Screen name="groups" options={{ headerShown: false }} />
      <Tabs.Screen name="myGroups" options={{ headerShown: false }} />
      <Tabs.Screen name="shop" options={{ headerShown: false }} />
    </Tabs>
  );
}
