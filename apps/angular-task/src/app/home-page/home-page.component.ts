import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
    selector: 'crx-home-page',
    imports: [CommonModule, UsersListComponent],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
