import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { returnMsg } from '@app/models/returnMsgModel';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<returnMsg>;
  public currentUser: Observable<returnMsg>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<returnMsg>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): returnMsg {
    return this.currentUserSubject.value;
  }

  login(account: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/api/login/authenticate`, { account, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  refreshToken() {
    return this.http.get<any>(`${environment.apiUrl}/api/login/RefreshToken`)
      .pipe(map(returnMsg => {
        localStorage.setItem('currentUser', JSON.stringify(returnMsg));
        this.currentUserSubject.next(returnMsg);
        return returnMsg;
      }));

  }

  callApi(data) {
    return this.http.post<any>(`${environment.apiUrl}/api/CashAdvanceApply/Insert`, { data }).subscribe(res => { console.log(res); })
  }

  logout() {
    this.http.get<any>(`${environment.apiUrl}/api/login/Logout`).subscribe();
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
