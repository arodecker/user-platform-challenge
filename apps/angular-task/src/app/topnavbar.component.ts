import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'crx-topnavbar',
    imports: [CommonModule, RouterModule],
    templateUrl: './topnavbar.component.html',
    styleUrl: './topnavbar.component.scss',
})
export class TopnavbarComponent {
}
