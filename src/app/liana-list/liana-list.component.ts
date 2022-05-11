import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Liana } from '../shared/liana';
@Component({
  selector: 'app-liana-list',
  templateUrl: './liana-list.component.html',
  styleUrls: ['./liana-list.component.css']
})
export class LianaListComponent implements OnInit {

  p: number = 1;
  Liana: Liana[];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public crudApi: CrudService, public toastr: ToastrService) {}

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetLianaList();
    s.snapshotChanges().subscribe((data) => {
      this.Liana = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Liana.push(a as Liana);
      });
    });
  }

  dataState() {
    this.crudApi
      .GetLianaList()
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

  deleteLiana(liana) {
    if (window.confirm('Are sure you want to delete this liana ?')) {
      this.crudApi.DeleteLiana(liana.$key);
      this.toastr.success(liana.commonname+ ' successfully deleted!');
    }
  }

}
