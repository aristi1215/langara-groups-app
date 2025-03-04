import { useAuthContext } from "@/context/AuthContextProvider";
import { router, Tabs, usePathname } from "expo-router";
import { useEffect } from "react";
import { Groups, Find, Shop } from "@/assets/icons/icons";

export default function TabsLayout() {
  const { session, loading } = useAuthContext();

  useEffect(() => {
    if (!session && !loading) {
      router.push("/(auth)/sign-in");
    }
  }, [session, loading]);

  return (
    <Tabs>
      <Tabs.Screen name="groups" options={{ headerShown: false, tabBarIcon: () => <Find /> }} />
      <Tabs.Screen name="myGroups" options={{ headerTitle: 'My groups', tabBarIcon: () => <Groups />, title: 'My groups' }} />
      <Tabs.Screen name="shop" options={{ headerShown: false, tabBarIcon: () => <Shop /> }} />
    </Tabs>
  );
}
