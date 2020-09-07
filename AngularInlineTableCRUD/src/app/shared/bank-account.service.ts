import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http: HttpClient) {

   }
   public postBankAccount(formData)
   {
      return this.http.post(environment.apiBaseURI+"/BankAccounts",formData);
   }
   public putBankAccount(formData)
   {
      return this.http.put(environment.apiBaseURI+"/BankAccounts/"+formData.BankAccountId,formData);
   }
   public getBankAccountList(){
     return this.http.get(environment.apiBaseURI+"/BankAccounts");
   }
   public deleteBankAccount(id)
   {
     return this.http.delete(environment.apiBaseURI+"/BankAccounts/"+id);
   }
}
