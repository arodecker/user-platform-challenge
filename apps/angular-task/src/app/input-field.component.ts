import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'crx-input-field',
    imports: [CommonModule, FormsModule],
    templateUrl: './input-field.component.html',
    styleUrl: './input-field.component.scss',
})
export class InputFieldComponent {
    @Input() public placeholder?: string;
    @Input() public iconClass?: string;
    @Input() public value?: string;
    @Output() public valueChange = new EventEmitter<string>();
    constructor(){}

    onChange(event: Event): boolean {
        const sender = (event.target as HTMLInputElement);
        if (event.target){
            this.valueChange.emit(sender.value);
            return true;
        }
        return false;
    }
}
