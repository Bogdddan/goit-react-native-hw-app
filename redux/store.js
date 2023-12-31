import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import rootReducer from "./rootReducer";
import { authReducer } from "./auth/authSlice";
import { postsReducer } from "./posts/postSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

// const reducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);