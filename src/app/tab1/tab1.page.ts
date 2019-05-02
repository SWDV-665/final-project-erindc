import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { DatePicker } from '@ionic-native/date-picker/ngx';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  payDate: string;
  payAmount: number;
  exp1: number;
  expN1: string;
  exp2: number;
  expN2: string;
  exp3: number;
  expN3: string;
  exp4: number;
  expN4: string;
  exp5: number;
  expN5: string;
  exp6: number;
  expN6: string;

  constructor(public alertController: AlertController, private datePicker: DatePicker, public budgetService: BudgetService) { }

  saveBudget() {
    let budget = {
      paycheckDate: new Date(this.payDate),
      paycheckAmount: this.payAmount,
      expenses: [
        {amount: this.exp1, label: this.expN1}, 
        {amount: this.exp2, label: this.expN2}, 
        {amount: this.exp3, label: this.expN3}, 
        {amount: this.exp4, label: this.expN4}, 
        {amount: this.exp5, label: this.expN5}, 
        {amount: this.exp6, label: this.expN6}
      ]
    }
    this.budgetService.addBudget(budget);
    this.clearForm();
  }

  clearForm() {
    this.payDate = null;
    this.payAmount = null;
    this.exp1 = null;
    this.expN1 = null;
    this.exp2 = null;
    this.expN2 = null;
    this.exp3 = null;
    this.expN3 = null;
    this.exp4 = null;
    this.expN4 = null;
    this.exp5 = null;
    this.expN5 = null;
    this.exp6 = null;
    this.expN6 = null;
  }
}

