import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { mmkvStorage } from "./storage";

type CustomLocation = {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
    address: string;
    heading: number;

} | null;

interface RiderStoreProps {
    user: any;
    location: CustomLocation;
    outOfRange: boolean;
    setUser: (user: any) => void;
    setOnDuty: (data: boolean) => void;
    setLocation: (location: CustomLocation) => void;
    clearRiderData: () => void;

}

export const useRiderStore = create<RiderStoreProps>()(
    persist(
        (set) => ({
            user: null,
            location: null,
            outOfRange: false,
            setUser: (user: any) => set({ user }),
            setOnDuty: (data: boolean) => set({ outOfRange: data }),
            setLocation: (location: CustomLocation) => set({ location }),
            clearRiderData: () => set({ user: null, location: null, outOfRange: false }),
        }),
        {
            name: 'rider-storage',
            partialize: (state) => ({
                user: state.user,
            }),
            storage: createJSONStorage(() => mmkvStorage),
        }
    )
)