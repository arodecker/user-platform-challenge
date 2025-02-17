import { Injectable } from "@angular/core";
import { Observable, Subject, take } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class HttpService {

    constructor(private httpClient: HttpClient) { }
    get(url: string): Observable<any> {
        const req = {
            url,
            method: 'get',
            image: false,
            body: null,
            sub: new Subject<any>()
        };
        return this.httpClient.get(req.url, {
            headers: new HttpHeaders()
        }).pipe(take(1));
    }

    post(url: string, data: any) {
        const req = {
          url,
          method: 'post',
          image: false,
          body: data,
          sub: new Subject<any>()
        };

        return this.httpClient.post(req.url, req.body, {
            headers: new HttpHeaders()
          }).pipe(take(1));
      }
}