import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../company';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.page.html',
  styleUrls: ['./list-item.page.scss'],
})
export class ListItemPage implements OnInit {
  category: string;
  companies: Company[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private server: ServerService) { }

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('item');
    const companyIds = this.server.getByCategory().get(this.category);
    companyIds.forEach(id => {
      const company = this.server.getCompany(id);
      this.companies.push(company);
    });
    this.companies.sort((a, b) => a.company.localeCompare(b.company, 'fr'));
  }

  digitsOnly(input: string) {
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
