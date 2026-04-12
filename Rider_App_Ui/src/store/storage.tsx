import AsyncStorage from '@react-native-async-storage/async-storage';

export const tokenStorage = {
    set: async (key: string, value: string) => {
        await AsyncStorage.setItem(`token-${key}`, value);
    },
    getString: async (key: string) => {
        return await AsyncStorage.getItem(`token-${key}`);
    },
    clearAll: async () => {
        const keys = await AsyncStorage.getAllKeys();
        const tokenKeys = keys.filter(k => k.startsWith('token-'));
        await Promise.all(tokenKeys.map(key => AsyncStorage.removeItem(key)));
    }
};

export const storage = AsyncStorage;

export const mmkvStorage = {
    setItem: async (key: string, value: string) => {
        await AsyncStorage.setItem(key, value);
    },
    getItem: async (key: string) => {
        const value = await AsyncStorage.getItem(key);
        return value ?? null;
    },
    removeItem: async (key: string) => {
        await AsyncStorage.removeItem(key);
    },
    clear: async () => {
        await AsyncStorage.clear();
    }
};
