import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APP_CONFIG } from './../../app.config';
import { Task } from '../models/task.model';

@Injectable()
export class TaskService {

    constructor(private http: HttpClient) {

    }

    getAll(): Observable<Task[]> {
        return this.http.get<Task[]>(`${APP_CONFIG.apiUrl}/tasks`);
    }

    executa(taskName: string): Observable<any> {
        const httpParams = new HttpParams().append('taskName', taskName);
        return this.http.post(`${APP_CONFIG.apiUrl}/tasks`, null, { params: httpParams });
    }
}
