import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public items: Array<string> = [];

  constructor(private server: ServerService) {
    this.server.getByCategory().forEach((companies, category) => {
      this.items.push(category);
    });
    this.items.sort(function (a, b) { return a.localeCompare(b, "fr"); });;
  }

  ngOnInit() {
  }
}
