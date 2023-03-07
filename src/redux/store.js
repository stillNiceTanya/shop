import { configureStore } from "@reduxjs/toolkit";
import rootReduсer from "./reducers/rootReducer";
import thunk from "redux-thunk";

export default configureStore({
  reducer: rootReduсer,
  middleware: [thunk],
  devTools: true,
});
