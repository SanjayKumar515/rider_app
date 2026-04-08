import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { mmkvStorage } from "./storage";

type CustomLocation = {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
    address: string;

} | null;

interface UserStoreProps {
    user: any;
    location: CustomLocation;
    outOfRange: boolean;
    setUser: (user: any) => void;
    setOutOfRange: (data: boolean) => void;
    setLocation: (location: CustomLocation) => void;
    clearData: () => void;

}

export const useUserStore = create<UserStoreProps>()(
    persist(
        (set) => ({
            user: null,
            location: null,
            outOfRange: false,
            setUser: (user: any) => set({ user }),
            setOutOfRange: (data: boolean) => set({ outOfRange: data }),
            setLocation: (location: CustomLocation) => set({ location }),
            clearData: () => set({ user: null, location: null, outOfRange: false }),
        }),
        {
            name: 'user-storage',
            partialize: (state) => ({
                user: state.user,
            }),
            storage: createJSONStorage(() => mmkvStorage),
        }
    )
)