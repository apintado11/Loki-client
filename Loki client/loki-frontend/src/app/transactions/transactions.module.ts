import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    TransactionsComponent
  ],
  exports: [
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class TransactionsModule { }
