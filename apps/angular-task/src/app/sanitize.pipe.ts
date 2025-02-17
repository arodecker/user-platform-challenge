import { Pipe, PipeTransform } from '@angular/core';
import {
    DomSanitizer,
    SafeStyle,
    SafeScript,
    SafeUrl,
    SafeHtml,
    SafeResourceUrl
} from '@angular/platform-browser';
@Pipe({
    name: 'safe',
})
export class SanitizePipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) { }
    transform(url: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}