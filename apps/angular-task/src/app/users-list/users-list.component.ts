import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';
import { BehaviorSubject, Observable} from 'rxjs';
import { User } from 'models/user.model';
import { Router, RouterModule } from '@angular/router';
import { InputFieldComponent } from '../input-field.component';
import { UserService } from 'services/user.service';
@Component({
    selector: 'crx-users-list',
    imports: [CommonModule, UserCardComponent, InputFieldComponent, RouterModule],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
    public allUsersObs$ = new Observable<User[]>();
    public allUsersSub$ = new BehaviorSubject<User[]>([]);
    public filteredUsersSub$ = new BehaviorSubject<User[]>([]);

    constructor(
        private router: Router,
        private userService: UserService
    ) {
        this.userService.refreshUserList();
        this.userService.allUsers$.subscribe(users => {
            if (users) {
                this.filteredUsersSub$.next(users);
                this.allUsersSub$.next(users);
            }
        });

    }

    setFilter(text: string): boolean{
        let filteredRows= this.allUsersSub$.value.filter((user: User) => {
                    const searchText = (user.name || '') + (user.email || '') + (user.phone || '') + (user.id || '').toString().toLocaleLowerCase();
                    return searchText.toLowerCase().includes(text);
                })
            
        this.filteredUsersSub$.next(filteredRows);
        // this.filterText$.next(text);
        return true;
    }

    onCardClick(id: string | number): boolean {
        if (!id) {
            return false;
        }
        this.router.navigate(['/users', id.toString()])
        return true;
    }
}
