import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public alertController: AlertController) {}

  budget = null;
  payDate: Date = new Date();

  addBudget() {
    this.showBudgetPrompt()
  }

  async showBudgetPrompt() {
    const budgetPrompt = await this.alertController.create({
      header: 'New Budget',
      inputs: [
        {
          name: 'paycheckDate',
          id: 'payDate',
          type: 'date',
          placeholder: 'Paycheck Date',
          value: this.payDate
        },
        {
          name: 'paycheckAmount',
          type: 'number',
          id: 'payAmount',
          placeholder: 'Paycheck Amount'
        },
        {
          name: 'expense1',
          type: 'number',
          id: 'expense1',
          placeholder: 'Expense'
        },
        {
          name: 'expense2',
          type: 'number',
          id: 'expense2',
          placeholder: 'Expense'
        },
        {
          name: 'expense3',
          type: 'number',
          id: 'expense3',
          placeholder: 'Expense'
        },
        {
          name: 'expense4',
          type: 'number',
          id: 'expense4',
          placeholder: 'Expense'
        },
        {
          name: 'expense5',
          type: 'number',
          id: 'expense5',
          placeholder: 'Expense'
        },
        {
          name: 'expense6',
          type: 'number',
          id: 'expense6',
          placeholder: 'Expense'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.budget = data;
          }
        }
      ]
    });

    await budgetPrompt.present();
  }
}

