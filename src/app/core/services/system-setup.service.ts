import { Injectable } from '@angular/core';
import { SystemSetup } from '../models/system-setup.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


interface SystemSetupResponse {
    content: SystemSetup[];
    totalElements: number;
    totalPages: number;
}

@Injectable({
    providedIn: 'root',
})
export class SystemSetupService {
    private apiUrl = 'http://localhost:8080/api/v1/system-setups';

    constructor(private http: HttpClient) {}

    getSystemSetupPaginated(page: number, pageSize: number, searchTerm: string = ''): Observable<SystemSetupResponse> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('size', pageSize.toString());

        if (searchTerm) {
            params = params.set('search', searchTerm);
        }

        return this.http.get<SystemSetupResponse>(this.apiUrl, { params });
    }

    addSystemSetup(setup: SystemSetup): Observable<SystemSetup> {
        return this.http.post<SystemSetup>(`${this.apiUrl}`, setup);
      }
    
    updateSystemSetup(setup: SystemSetup): Observable<SystemSetup> {
        return this.http.put<SystemSetup>(`${this.apiUrl}/${setup.id}`, setup);
    }
}