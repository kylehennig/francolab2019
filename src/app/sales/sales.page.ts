import { Component } from '@angular/core';
import { ServerService } from '../server.service';
import { Company } from '../company';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage {
  // List of companies that are on sale.
  companies: Company[] = [];
  constructor(
    private server: ServerService) {
    for (const company of server.companies) {
      if (server.onSale(company.id)) {
        this.companies.push(company);
      }
    }
    this.companies.sort((a, b) => a.company.localeCompare(b.company, 'fr'));
  }

  fullAddress(id: number): string {
    const company = this.server.getCompany(id);
    let fullAddress = '';
    if (company.address !== '') {
      fullAddress += company.address + ', ';
    }
    fullAddress += company.city + ', ' + company.region;
    return fullAddress;
  }

  digitsOnly(input: string): string {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let output = '';
    for (const char of input) {
      if (digits.includes(char)) {
        output += char;
      }
    }
    return output;
  }

  call(phoneNumber: string) {
    window.location.href = 'tel:' + this.digitsOnly(phoneNumber);
  }

  email(email: string) {
    window.location.href = 'mailto:' + email;
  }
}
