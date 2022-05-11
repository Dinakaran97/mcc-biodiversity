import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Shrubs } from '../shared/shrubs';
@Component({
  selector: 'app-shrubs-list',
  templateUrl: './shrubs-list.component.html',
  styleUrls: ['./shrubs-list.component.css']
})
export class ShrubsListComponent implements OnInit {

  p: number = 1;
  Shrubs: Shrubs[];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public crudApi: CrudService, public toastr: ToastrService) {}

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetShrubsList();
    s.snapshotChanges().subscribe((data) => {
      this.Shrubs = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Shrubs.push(a as Shrubs);
      });
    });
  }

  dataState() {
    this.crudApi
      .GetShrubsList()
      .valueChanges()
      .subscribe((data) => {
        this.preLoader = false;
        if (data.length <= 0) {
          
          this.noData = true;
        } else {
        
          this.noData = false;
        }
      });
  }

  deleteShrubs(shrubs) {
    if (window.confirm('Are sure you want to delete this shrub ?')) {
      this.crudApi.DeleteShrubs(shrubs.$key);
      this.toastr.success(shrubs.commonname+ ' successfully deleted!');
    }

}}
