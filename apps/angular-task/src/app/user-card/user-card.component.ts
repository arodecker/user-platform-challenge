import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'models/user.model';
import { AppState } from 'state/app.state';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FavoriteButtonComponent } from '../favorite-button.component';
import { UserService } from 'services/user.service';
@Component({
    selector: 'crx-user-card',
    imports: [CommonModule, FavoriteButtonComponent],
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
    get user(): User | undefined {
        return this._user;
    }
    @Input() set user(val: User) {
        this._user = val;

        if (this.user && this.user.id){
            let storage = this._localStorage?.getItem('favorites');
            let fav = storage? JSON.parse(storage).find((x: string) => x == this.user?.id.toString()) : null;
            if (fav){
                this.isFavorite = true;
            }
        }
    }
    @Output() cardClicked = new EventEmitter(false);

    public isFavorite: boolean = false;
    public _localStorage = typeof window !== 'undefined' ? localStorage : null;
    private _user: User | undefined;
    constructor(
        private store: Store<AppState>,
        private userService: UserService) {

    }
    onCardClicked(){
        this.cardClicked.emit(true);
    }
    saveToggled(save: boolean){
        if (save){
            this.save();
        }
        else{
            this.unsave();
        }
    }
    save(){
        if (this.user && this.user.id && this.userService.AddFavorite(this.user?.id.toString())){
            this.isFavorite = true;
        }
        
    }
    unsave(){
        if (this.user && this.user.id && this.userService.RemoveFavorite(this.user?.id.toString())){
            this.isFavorite = false;
        }
    }
}
