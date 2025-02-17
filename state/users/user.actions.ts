
import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUsers =  createAction('[Users Page] Load Users');

export const loadUsersSuccess = createAction(
    '[Users API] Load Users Success',
    props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
    '[Users API] Load Users Failure',
    props<{ error: string }>()
)
export const loadUserDetails = createAction(
    '[User Details Page] Load User Data',
    props<{ id: string }>()
);

export const loadUserDetailsSuccess = createAction(
    '[Users API] Load User Data Success',
    props<{ user: User }>()
);

export const loadUserDetailsFailure = createAction(
    '[Users API] Load User Data Failure',
    props<{ error: string }>()
)