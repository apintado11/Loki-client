import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestParameter} from "@angular/cli/src/analytics/analytics-parameters";

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient: HttpClient) { }

  getAllTransactions(){
    return this.httpClient.get('http://localhost:3003/transaction/getall');
  }

  //


  updateTransactionCategory(id: string, body: { taxCategory: string; }){
    const endpointUrl = 'http://localhost:3003/transaction/'+id

    return this.httpClient.patch(endpointUrl,body);
  }
}
