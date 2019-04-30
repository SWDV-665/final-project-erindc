import { Component, Inject, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DOCUMENT } from '@angular/common'; 

import { DatePicker } from '@ionic-native/date-picker/ngx';
import { BudgetService } from '../services/budget.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  currentBudget$: Observable<object[]>;

  constructor(@Inject(DOCUMENT) document, public alertController: AlertController, private datePicker: DatePicker, public budgetService: BudgetService) {
    budgetService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.getCurrentBudget();
    });
  }

  ngOnInit() {
    this.getCurrentBudget();
  }

  getCurrentBudget() {
    this.currentBudget$ = this.budgetService.getCurrentBudget()
  }

  saveBudget() {
    this.budgetService.addBudget({
      paycheckDate: new Date((<HTMLInputElement>document.getElementById('payDate')).value),
      paycheckAmount: (<HTMLInputElement>document.getElementById('payAmount')).value,
      expenses: [
        {amount: (<HTMLInputElement>document.getElementById('exp1')).value, label: (<HTMLInputElement>document.getElementById('expN1')).value}, 
        {amount: (<HTMLInputElement>document.getElementById('exp2')).value, label: (<HTMLInputElement>document.getElementById('expN2')).value}, 
        {amount: (<HTMLInputElement>document.getElementById('exp3')).value, label: (<HTMLInputElement>document.getElementById('expN3')).value}, 
        {amount: (<HTMLInputElement>document.getElementById('exp4')).value, label: (<HTMLInputElement>document.getElementById('expN4')).value}, 
        {amount: (<HTMLInputElement>document.getElementById('exp5')).value, label: (<HTMLInputElement>document.getElementById('expN5')).value}, 
        {amount: (<HTMLInputElement>document.getElementById('exp6')).value, label: (<HTMLInputElement>document.getElementById('expN6')).value}
      ]
    })
  }
}

