import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopnavbarComponent } from './topnavbar.component';

@Component({
    imports: [RouterModule, TopnavbarComponent],
    selector: 'crx-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    title = 'angular-task';

}
