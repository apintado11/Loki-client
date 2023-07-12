import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {TransactionsService} from "./transactions.service";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit{

      transactions$ : Observable<any> |undefined;

constructor(private transactionService: TransactionsService) {
}
  msgTrue = false
ngOnInit(): void {
  this.transactions$ = this.transactionService.getAllTransactions()

}

  updateTransactionCategory(id: any){
  const newFormData = {taxCategory: 'Utilities'}
    this.transactionService.updateTransactionCategory(id,newFormData).subscribe(data => {
      console.log(data)
      this.msgTrue = true
    })
  }

  markAsSupplies(id: any){
  const newFormData = {taxCategory: 'Supplies'}
    this.transactionService.updateTransactionCategory(id,newFormData).subscribe(data => {
      console.log(data)
      this.msgTrue = true
    })
  }

  markAsRent(id: any){
  const newFormData = {taxCategory: 'Rent'}
    this.transactionService.updateTransactionCategory(id,newFormData).subscribe(data => {
      console.log(data)
      this.msgTrue = true
    })
  }

  markAsEquipment(id: any){
  const newFormData = {taxCategory: 'Equipment'}
    this.transactionService.updateTransactionCategory(id,newFormData).subscribe(data => {
      console.log(data)
      this.msgTrue = true
    })
  }

  markAsInsurance(id: any){
  const newFormData = {taxCategory: 'Insurance'}
    this.transactionService.updateTransactionCategory(id,newFormData).subscribe(data => {
      console.log(data)
      this.msgTrue = true
    })
  }


  markAsMaintenance(id: any){
  const newFormData = {taxCategory: 'Maintenance'}
    this.transactionService.updateTransactionCategory(id,newFormData).subscribe(data => {
      console.log(data)
      this.msgTrue = true
    })
  }

  markAsCommunication(id: any){
  const newFormData = {taxCategory: 'Communication'}
    this.transactionService.updateTransactionCategory(id,newFormData).subscribe(data => {
      console.log(data)
      this.msgTrue = true
    })
  }

  markAsLegalServices(id: any){
  const newFormData = {taxCategory: 'Legal Services'}
    this.transactionService.updateTransactionCategory(id,newFormData).subscribe(data => {
      console.log(data)
      this.msgTrue = true
    })
  }

  markAsMealsEntertainment(id: any){
  const newFormData = {taxCategory: 'Meals Entertainment'}
    this.transactionService.updateTransactionCategory(id,newFormData).subscribe(data => {
      console.log(data)
      this.msgTrue = true
    })
  }

    markAsTransportation(id: any){
  const newFormData = {taxCategory: 'Transportation'}
    this.transactionService.updateTransactionCategory(id,newFormData).subscribe(data => {
      console.log(data)
      this.msgTrue = true
    })
  }
    markAsDeposit(id: any){
  const newFormData = {taxCategory: 'Deposits'}
    this.transactionService.updateTransactionCategory(id,newFormData).subscribe(data => {
      console.log(data)
      this.msgTrue = true
    })
  }







}
