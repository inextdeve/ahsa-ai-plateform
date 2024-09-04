import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { errorsReducer as errors } from "./errors";
import { sessionReducer as session } from "./session";
import { violationsReducer as violations } from "./violations";
import { reportsReducer as reports } from "./reports";
import throttleMiddleware from "./throttleMiddleware";

const reducer = combineReducers({
  errors,
  session,
  violations,
  reports,
});

export { errorsActions } from "./errors";
export { sessionActions } from "./session";
export { violationsActions } from "./violations";
export { reportsActions } from "./reports";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(throttleMiddleware),
});

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];

export default store;
