import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  currentBudget$: Observable<object[]>;

  constructor(public budgetService: BudgetService) {
    budgetService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.getCurrentBudget();
    });
  }

  ngOnInit() {
    this.getCurrentBudget();
  }

  ionViewDidEnter() {
    this.getCurrentBudget();
  }

  getCurrentBudget() {
    this.currentBudget$ = this.budgetService.getCurrentBudget()
  }

}
