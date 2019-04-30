import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, throwError } from 'rxjs';

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
    return this.http.post<object>(this.baseUrl + `/budget`, budget).subscribe(res => {
      this.budget = res;
      this.dataChangeSubject.next(true);
    });
  }
}
