import { useRiderStore } from "@/store/riderStore";
import { tokenStorage } from "@/store/storage";
import { useUserStore } from "@/store/userStore";
import { resetAndNavigate } from "@/utils/Helpers";
import axios from "axios";
import { Alert } from "react-native";
import { BASE_URL } from "./config";

export const signin = async (
  payload: {
    role: "customer" | "rider";
    phoneNumber: string;
  },
  upDateAccessToken: () => void,
) => {
  const { setUser } = useUserStore.getState();
  const { setUser: setRiderUser } = useRiderStore.getState();

  try {
    const res = await axios.post(`${BASE_URL}/auth/signin`, {
      role: payload.role,
      phone: payload.phoneNumber,
    });
    if (res.data.user.role === "customer") {
      setUser(res.data.user);
      resetAndNavigate("/customer/customerHome");
    } else {
      setRiderUser(res.data.user);
      resetAndNavigate("/rider/riderHome");
    }
    // Backend returns access_token and refresh_token
    tokenStorage.set("access_token", res.data.access_token);
    tokenStorage.set("refresh_token", res.data.refresh_token);
    upDateAccessToken();
  } catch (error: any) {
    Alert.alert("Oh ! Dang there was an error");
    console.log("Error in signin", error?.response?.data?.msg);
  }
};
export const logout = async (disconnect?: () => void) => {
  if (disconnect) {
    disconnect();
  }
  const { clearData } = useUserStore.getState();
  const { clearRiderData } = useRiderStore.getState();

  tokenStorage.clearAll();
  clearData();
  clearRiderData();
  resetAndNavigate("/role");
};
