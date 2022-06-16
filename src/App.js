import React from "react";
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import productSlice from "./reducers/productSlice";
import AppContainer from "./AppContainer";
// config redux perist
import { PersistGate } from "redux-persist/integration/react";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
export default function App() {
  // const store = createStore(allReducer);
  const persistConfig = {
    key: "root",
    storage: storage,
  };

  const allReducers = combineReducers({
    productSlice: productSlice,
  });

  const persistedReducer = persistReducer(persistConfig, allReducers);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        // serializableCheck: {
        //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // },
        serializableCheck: false,
      }),
  });
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}
