import { createMMKV } from 'react-native-mmkv';


export const tokenStorage = createMMKV({
    id: 'token-storage',
    encryptionKey: 'some-secret-key',
})

export const storage = createMMKV({
    id: 'my-app-storage',
    encryptionKey: 'some-secret-key',
})

export const mmkvStorage = {
    setItem: (key: string, value: string) => {
        storage.set(key, value)
    },
    getItem: (key: string) => {
        return storage.getString(key) ?? null;
    },
    removeItem: (key: string) => {
        storage.remove(key)
    },
    clear: () => {
        storage.clearAll()
    }
}
