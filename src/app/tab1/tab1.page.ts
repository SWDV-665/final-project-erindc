import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  paycheckDate: Date;
  budget: {
    paycheckDate: Date,
    paycheckAmount: number,
    expenseAmount1: number,
    expenseName1: string,
    expenseAmount2: number,
    expenseName2: string,
    expenseAmount3: number,
    expenseName3: string,
    expenseAmount4: number,
    expenseName4: string,
    expenseAmount5: number,
    expenseName5: string,
    expenseAmount6: number,
    expenseName6: string,
  }
  constructor(public alertController: AlertController, private datePicker: DatePicker) {
    console.log(this.budget);
  }

  saveBudget(payDate, payAmount, exp1, expN1, exp2, expN2, exp3, expN3, exp4, expN4, exp5, expN5, exp6, expN6) {
    this.budget = { 
      paycheckDate: new Date(payDate), 
      paycheckAmount: payAmount, 
      expenseAmount1: exp1, 
      expenseName1: expN1,
      expenseAmount2: exp2,
      expenseName2: expN2,
      expenseAmount3: exp3,
      expenseName3: expN3,
      expenseAmount4: exp4, 
      expenseName4: expN4,
      expenseAmount5: exp5,
      expenseName5: expN5,
      expenseAmount6: exp6,
      expenseName6: expN6
    }
    console.log(this.budget);
  }

  onDateEntry(value: string) {
    this.paycheckDate = new Date(value);
    console.log(this.paycheckDate)
  }
}

