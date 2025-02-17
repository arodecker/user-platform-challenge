import { createAction, createReducer, on, props } from '@ngrx/store';
import { User } from '../../models/user.model';
import { loadUserDetails, loadUserDetailsFailure, loadUserDetailsSuccess, loadUsers, loadUsersFailure, loadUsersSuccess } from './user.actions';
export enum UserStateStatus {
    PENDING = 'pending',
    LOADING = 'loading',
    ERROR = 'error',
    SUCCESS = 'success'
}
export interface UsersState {
    users: User[];
    error: string;
    status: UserStateStatus.PENDING | UserStateStatus.LOADING | UserStateStatus.ERROR | UserStateStatus.SUCCESS;
}
export interface UserDetailsState {
    id: string;
    error: string;
    status: UserStateStatus.PENDING | UserStateStatus.LOADING | UserStateStatus.ERROR | UserStateStatus.SUCCESS;
}
export interface FavoritesState {
    ids: string[];
    error: string;
    status: UserStateStatus.PENDING | UserStateStatus.LOADING | UserStateStatus.ERROR | UserStateStatus.SUCCESS;
}
export const initialUsersState: UsersState = {
    users: [],
    error: '',
    status: UserStateStatus.PENDING
};
export const initialUserDetailsState: UserDetailsState = {
    id: '',
    error: '',
    status: UserStateStatus.PENDING
};
export const initialFavoritesState: FavoritesState = {
    ids: [],
    error: '',
    status: UserStateStatus.PENDING
};
export const usersReducer = createReducer(
    initialUsersState,
    on(loadUsers, (state, { }) => ({
        ...state,
        users: [],
        status: UserStateStatus.LOADING
    })),
    on(loadUsersSuccess, (state, { users }) => ({
        ...state,
        users: users,
        status: UserStateStatus.SUCCESS
    })),
    on(loadUsersFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: UserStateStatus.ERROR
    }))
);
export const userDetailsReducer = createReducer(
    initialUserDetailsState,
    on(loadUserDetails, (state, { id }) => ({
        ...state,
        user: undefined,
        status: UserStateStatus.LOADING
    })),
    on(loadUserDetailsSuccess, (state, { user }) => ({
        ...state,
        user: user,
        status: UserStateStatus.SUCCESS
    })),
    on(loadUserDetailsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: UserStateStatus.ERROR
    }))
);