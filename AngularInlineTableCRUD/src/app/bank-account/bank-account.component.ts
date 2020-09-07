import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { BankService } from '../shared/bank.service';
import { BankAccountService } from '../shared/bank-account.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  bankAccountForm: FormArray = this.fb.array([]);
  bankList = [];
  notification = null;
  constructor(private fb: FormBuilder, private _bankService: BankService, private _bankAccountService: BankAccountService) { }

  ngOnInit() {
    this._bankService.getBankList()
      .subscribe(res => this.bankList = res as []);
    // this.AddAccountBankForm();
    this._bankAccountService.getBankAccountList().subscribe(
      res => {
        if ((res as []).length == 0) {
          this.AddAccountBankForm();
        }
        else {
          (res as []).forEach((bankAccount: any) => {
            this.bankAccountForm.push(this.fb.group({
              BankAccountId: [bankAccount.bankAccountId],
              AccountNumber: [bankAccount.accountNumber, Validators.required],
              AccountHolder: [bankAccount.accountHolder, Validators.required],
              BankID: [bankAccount.bankID, Validators.min(1)],
              IFSC: [bankAccount.ifsc, Validators.required],
            }))
          })
        }
      }
    )
  }

  AddAccountBankForm() {
    this.bankAccountForm.insert(0, this.fb.group({
      BankAccountId: [0],
      AccountNumber: ['', Validators.required],
      AccountHolder: ['', Validators.required],
      BankID: [0, Validators.min(1)],
      IFSC: ['', Validators.required],

    }));
  }
  recordSubmit(fg: FormGroup) {
    if (fg.value.BankAccountId == 0) {
      this._bankAccountService.postBankAccount(fg.value).subscribe((res: any) => {
        fg.patchValue({ BankAccountId: res.bankAccountId })
        this.ShowNotifyCation('insert');
      });
    }
    else {
      this._bankAccountService.putBankAccount(fg.value).subscribe((res: any) => {
        this.ShowNotifyCation('update');
      });
    }

  }
  DeleteBankAccount(id: number, index: number) {
    //xóa trong db
    if (id == 0) {
      this.bankAccountForm.removeAt(index);
      this.ShowNotifyCation('delete');
    }
    else if (id > 0 && confirm("Are you sure to delete this record")) {
      this._bankAccountService.deleteBankAccount(id).subscribe((res: any) => {
        this.bankAccountForm.removeAt(index);
        this.ShowNotifyCation('delete');
      })
    }
  }
  ShowNotifyCation(category) {
    switch (category) {
      case 'insert':
        this.notification = { class: 'text-success', message: 'saved' }
        break;
      case 'update':
        this.notification = { class: 'text-primary', message: 'updated' }
        break;
      case 'delete':
        this.notification = { class: 'text-danger', message: 'deleted' }
        break;
      default:
        break;
    }
    setTimeout(() => {
      this.notification = null;
    }, 3000);
  }
  

}
