import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.page.html',
  styleUrls: ['./list-item.page.scss'],
})
export class ListItemPage implements OnInit {
  category: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('item');
  }
}
