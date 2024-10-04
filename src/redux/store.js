import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducer/index";

const Store = configureStore({
    reducer: rootReducers,
});

export default Store;