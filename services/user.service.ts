import { } from '@angular/common';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpService } from 'common-services/src/http.service';
import { User } from 'models/user.model';
import { Observable } from 'rxjs';
import { AppState } from 'state/app.state';
import { loadUserDetails, loadUsers } from 'state/users/user.actions';
import { selectAllUsers, selectUser } from 'state/users/user.selectors';

@Injectable()
export class UserService {
  public _localStorage = typeof window !== 'undefined' ? localStorage : null;
  public allUsers$: Observable<User[]>;
  constructor(private http: HttpService, private store: Store<AppState>) { 
    this.allUsers$ = this.store.select(selectAllUsers);
  }
  
  AddFavorite(userId: string) {
    let storage = this._localStorage?.getItem('favorites');
    let favs = storage ? JSON.parse(storage) : [];

    if (userId && favs.indexOf(userId.toString()) == -1) {
      this._localStorage?.setItem('favorites', JSON.stringify([...favs, userId.toString()]))
      return true;
    }
    return false
  }
  RemoveFavorite(userId: string){
      let storage = this._localStorage?.getItem('favorites');
      let favs = storage? JSON.parse(storage) : [];

      if (userId && userId && favs.indexOf(userId.toString()) > -1){
          favs.splice(favs.indexOf(userId.toString()), 1)
          this._localStorage?.setItem('favorites', JSON.stringify([...favs]))
          return true;
      }
      return false;
  }
  refreshUserList(){
    this.store.dispatch(loadUsers());
  }
}