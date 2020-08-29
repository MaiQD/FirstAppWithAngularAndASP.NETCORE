import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  bankAccountForm : FormArray = this.fb.array([]);
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.AddAccountBankForm();
  }
  
  AddAccountBankForm() {
    this.bankAccountForm.push(this.fb.group({
      BankAccountId: [0],
      AccountNumber: [''],
      AccountHolder: [''],
      BankID: [0],
      IFSC: [''],

    }))
  }
}
