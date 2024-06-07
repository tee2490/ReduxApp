import React from "react";
import Navigators from "./src/screen/Navigators";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigators />
    </Provider>
  );
}
