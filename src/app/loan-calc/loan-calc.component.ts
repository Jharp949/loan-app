/*
Author: James Harper
Title: loan-calc.component.ts
Date: 12/17/23
Description: Class that containers TypeScript for calculating values provided by user input
*/

import { Component } from '@angular/core';

@Component({

  selector: 'app-loan-calc',
  templateUrl: './loan-calc.component.html',
  styleUrls: ['./loan-calc.component.css']

})

// class which holds the variables and functions used to build the loan app
export class LoanCalcComponent {

// Properties which can be called to and from the loan-calc DOM
  principal: number;
  annualRate: number;
  years: number;
  monthlyPayment: number = 0;
  totalInterest: number = 0;

// Function that calculates the monthly payment and interest paid
  calculateLoanDetails(): void {

    const monthlyRate = this.annualRate / 12 / 100;
    const totalPayments = this.years * 12;
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, totalPayments);
    const denominator = Math.pow(1 + monthlyRate, totalPayments) - 1;

    this.monthlyPayment = numerator / denominator * this.principal;

    const totalPaid = this.monthlyPayment * totalPayments;

    this.totalInterest = totalPaid - this.principal;

  }
}
