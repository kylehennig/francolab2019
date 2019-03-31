import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-categories',
  templateUrl: 'categories.page.html',
  styleUrls: ['categories.page.scss']
})
export class CategoriesPage implements OnInit {
  private selectedItem: any;
  public items: Array<string> = [];

  constructor(private server: ServerService) {
    this.server.getByCategory().forEach((_, category) => {
      this.items.push(category);
    });
    this.items.sort(function (a, b) { return a.localeCompare(b, "fr"); });;
  }

  ngOnInit() {
  }
}
