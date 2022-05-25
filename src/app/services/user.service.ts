import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    AuthInfo() {
      return this.http.get<any>(`${environment.apiUrl}/api/login/AuthInfo`);
    }

    getMenu() {
      return this.http.get<any>(`${environment.apiUrl}/api/login/ActionAuth`);
    }
}
