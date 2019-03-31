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
  }
}
