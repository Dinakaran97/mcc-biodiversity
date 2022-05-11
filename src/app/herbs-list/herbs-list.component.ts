import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Herbs } from '../shared/herbs';
@Component({
  selector: 'app-herbs-list',
  templateUrl: './herbs-list.component.html',
  styleUrls: ['./herbs-list.component.css']
})
export class HerbsListComponent implements OnInit {

  p: number = 1;
  Herbs: Herbs[];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public crudApi: CrudService, public toastr: ToastrService) {}

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetHerbsList();
    s.snapshotChanges().subscribe((data) => {
      this.Herbs = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Herbs.push(a as Herbs);
      });
    });
  }

  dataState() {
    this.crudApi
      .GetHerbsList()
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

  deleteHerbs(herbs) {
    if (window.confirm('Are sure you want to delete this herb ?')) {
      this.crudApi.DeleteHerbs(herbs.$key);
      this.toastr.success(herbs.commonname+ ' successfully deleted!');
    }
}}
