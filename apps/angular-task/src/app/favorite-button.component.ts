import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'crx-favorite-button',
    imports: [CommonModule],
    templateUrl: './favorite-button.component.html',
    styleUrl: './favorite-button.component.scss',
})
export class FavoriteButtonComponent {
    @Input() checked: boolean = false;
    @Output() checkChanged: EventEmitter<boolean> = new EventEmitter(false);
    toggle(event: any, save: boolean){
        this.checkChanged.emit(save)
        event.stopPropagation();
    }
}
