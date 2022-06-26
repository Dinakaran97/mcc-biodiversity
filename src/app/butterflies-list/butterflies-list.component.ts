import { Component, OnInit } from '@angular/core';
import { Butterfly } from '../shared/butterfly';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-butterflies-list',
  templateUrl: './butterflies-list.component.html',
  styleUrls: ['./butterflies-list.component.css']
})
export class ButterfliesListComponent implements OnInit {
  filterTerm! : string;
  p: number = 1;
  Butterfly: Butterfly[];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public crudApi: CrudService, public toastr: ToastrService) {}

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetButterflyList();
    s.snapshotChanges().subscribe((data) => {
      this.Butterfly = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Butterfly.push(a as Butterfly);
      });
    });
  }

  dataState() {
    this.crudApi
      .GetButterflyList()
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

  deleteButterfly(butterfly) {
    if (window.confirm('Are sure you want to delete this butterfly ?')) {
      this.crudApi.DeleteButterfly(butterfly.$key);
      this.toastr.success(butterfly.commonname+ ' successfully deleted!');
    }

}}
