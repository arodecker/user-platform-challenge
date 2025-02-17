import { UsersState, UserDetailsState } from "./users/users.reducer";

export interface AppState {
    users: UsersState;
    userDetails: UserDetailsState,
}