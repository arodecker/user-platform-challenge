import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { UserDetailsState, UsersState } from "./users.reducer";

export const selectUsers = (state: AppState) => state.users;
export const selectAllUsers = createSelector(
    selectUsers,
    (state: UsersState) => state.users
);
export const selectUserDetails = (state: AppState) => state.userDetails;
export const selectUser = createSelector(
    selectUserDetails,
    (state: UserDetailsState) => state.id
);