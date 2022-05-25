import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class SubsidyMaintainService {
  constructor(private http: HttpClient) { }

  SearchAll() {
    return this.http.get<any>(`${environment.apiUrl}/api/SubsidyMaintain/Get`);
  }

}
