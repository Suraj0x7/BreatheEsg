import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./slices/MenuSlice";
import AuthSlice from "./slices/AuthSlice";
const store = configureStore({
    reducer: {
        Menu: MenuSlice,
        Auth: AuthSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
