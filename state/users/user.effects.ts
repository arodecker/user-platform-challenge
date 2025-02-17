import { Injectable } from "@angular/core";
import { loadUserDetails, loadUserDetailsSuccess, loadUsers, loadUsersFailure, loadUsersSuccess } from "./user.actions";
import { catchError, from, map, of, switchMap, withLatestFrom } from "rxjs";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from "../../services/api.service";
import { AppState } from "state/app.state";
import { Store } from "@ngrx/store";
import { selectUserDetails } from "./user.selectors";

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private store: Store<AppState>, private apiService: ApiService) { }
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        from(this.apiService.getUsers()).pipe(
          map((users) => loadUsersSuccess({ users: users.map(u=> {
              return { ...u }   //could add a fake profileImage URL here
          }) })),
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
  );
  loadUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserDetails),
      withLatestFrom(this.store.select(selectUserDetails)),
      switchMap(([action, user]) =>
        from(this.apiService.getUserDetails(user.id)).pipe(
          map((user) => loadUserDetailsSuccess({ user: user })),
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
  );
}