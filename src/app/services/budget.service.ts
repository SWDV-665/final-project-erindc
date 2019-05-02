import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  dataChanged$: Observable<boolean>;
  private dataChangeSubject: Subject<boolean>;
  budget: any = {};

  baseUrl = 'http://localhost:8000'

  constructor(private http: HttpClient) {
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
  }

  getCurrentBudget(): Observable<object[]> {
    return this.http.get<object[]>(this.baseUrl + '/budget/current');
  }

  addBudget(budget) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<object>(this.baseUrl + `/budget`, budget, httpOptions).subscribe(res => {
      this.budget = res;
      this.dataChangeSubject.next(true);
    });
  }
}
