import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemPage } from './list-item.page';

describe('ListItemPage', () => {
  let component: ListItemPage;
  let fixture: ComponentFixture<ListItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
