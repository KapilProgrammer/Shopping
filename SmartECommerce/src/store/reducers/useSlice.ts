import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserState {
    userData: object | null;
    isLoading: boolean;
}

const initialState: UserState = {
    userData: null,
    isLoading: true
}

const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<object>) => {
            state.userData = action.payload;
            AsyncStorage.setItem('userData',JSON.stringify(action.payload))
            state.isLoading = false
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
});

export const { setUserData,setLoading } = userSlice.actions;
export default userSlice.reducer;
