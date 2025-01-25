import AsyncStorage from "@react-native-async-storage/async-storage";

const StorageKeys = {
  ONBOARDING_VIEWED: "ONBOARDING_VIEWED",
} as const;

export type StorageKeysType = (typeof StorageKeys)[keyof typeof StorageKeys];

export const useLocalAsyncStorage = (key: StorageKeysType) => {
  const setItem = async <T>(value: T) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error("Error setting item in AsyncStorage:", error);
    }
  };

  const getItem = async () => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error getting item from AsyncStorage:", error);
      return null;
    }
  };

  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing item from AsyncStorage:", error);
    }
  };

  return {
    setItem,
    getItem,
    removeItem,
  };
};
