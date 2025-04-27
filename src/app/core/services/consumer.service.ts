import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Consumer } from '../models/consumer.model';

interface ConsumerResponse {
    content: Consumer[];
    totalElements: number;
    totalPages: number;
}

@Injectable({
    providedIn: 'root',
})
export class ConsumerService {
    private apiUrl = 'http://localhost:8080/api/v1/consumer';

    constructor(private http: HttpClient) {}

    getConsumerPaginated(page: number, pageSize: number, searchTerm: string = ''): Observable<ConsumerResponse> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('size', pageSize.toString());

        if (searchTerm) {
            params = params.set('search', searchTerm);
        }

        return this.http.get<ConsumerResponse>(this.apiUrl, { params });
    }
}