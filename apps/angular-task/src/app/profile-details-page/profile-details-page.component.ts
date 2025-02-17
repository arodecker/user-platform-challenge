import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { first, Observable, of, withLatestFrom } from 'rxjs';
import { User } from 'models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'state/app.state';
import { loadUsers } from 'state/users/user.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { SanitizePipe } from '../sanitize.pipe';
import { FavoriteButtonComponent } from '../favorite-button.component';
import { UserService } from 'services/user.service'
@Component({
    selector: 'crx-profile-details-page',
    imports: [CommonModule, FavoriteButtonComponent, SanitizePipe],
    templateUrl: './profile-details-page.component.html',
    styleUrl: './profile-details-page.component.scss',
})
export class ProfileDetailsPageComponent implements OnInit {
    public user$: Observable<User | null> = of(null);
    public randomProfileImageUrl: string = '';
    public isFavorite: boolean = false;
    public _localStorage = typeof window !== 'undefined' ? localStorage : null;
    public _user: User | null = null;
    public userId: string | undefined;
    constructor(
        private store: Store<AppState>,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) {
        this.route.paramMap.pipe(first(),
        ).subscribe(
            (params) => {
                let userId = params.get('userId');
                if (userId) {
                    this.userId = userId;
                } else {
                    this.router.navigate(['/404']);
                }
            }
        );
    }

    ngOnInit() {
        this.userService.allUsers$.subscribe(users => {
            const user = users.find(x => x.id.toString() == this.userId);
            if (user) {
                this.user$ = of(user);
                this._user = user;
                this.randomProfileImageUrl = `https://bootdey.com/img/Content/avatar/avatar${(Number.parseInt((Math.random() * (8 - 1) + 1).toString())).toString()}.png`
                let storage = this._localStorage?.getItem('favorites');
                let fav = storage ? JSON.parse(storage).find((x: string) => x == this._user?.id.toString()) : null;
                if (fav) {
                    this.isFavorite = true;
                }
            }
        });
        this.userService.refreshUserList();
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
        if (this._user && this._user?.id && this.userService.AddFavorite(this._user?.id.toString())){
            this.isFavorite = true;
        }
        
    }
    unsave(){
        if (this._user && this._user?.id && this.userService.RemoveFavorite(this._user?.id.toString())){
            this.isFavorite = false;
        }
    }
}
