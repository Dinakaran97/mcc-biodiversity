import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Birds } from '../shared/birds';
@Component({
  selector: 'app-birds-list',
  templateUrl: './birds-list.component.html',
  styleUrls: ['./birds-list.component.css']
})
export class BirdsListComponent implements OnInit {

  p: number = 1;
  Birds: Birds[];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public crudApi: CrudService, public toastr: ToastrService) {}

  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetBirdsList();
    s.snapshotChanges().subscribe((data) => {
      this.Birds = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Birds.push(a as Birds);
      });
    });
  }

  dataState() {
    this.crudApi
      .GetBirdsList()
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

  deleteBirds(birds) {
    if (window.confirm('Are sure you want to delete this bird ?')) {
      this.crudApi.DeleteBirds(birds.$key);
      this.toastr.success(birds.classname+ ' successfully deleted!');
    }

}}
