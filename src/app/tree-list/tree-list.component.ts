import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Tree } from '../shared/tree';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css']
})
export class TreeListComponent implements OnInit {
 filteritem!:string;
 
  p: number = 1;
  Tree: Tree[];
  
   hideWhenNoStudent: boolean = false;
   noData: boolean = false;
   preLoader: boolean = true;
 
   constructor(public crudApi: CrudService, public toastr: ToastrService,private http: HttpClient) {
    
   }
   //search
   
 
   ngOnInit() {
     this.dataState();
     let s = this.crudApi.GetTreeList();
     s.snapshotChanges().subscribe((data) => {
       this.Tree = [];
       data.forEach((item) => {
         let a = item.payload.toJSON();
         a['$key'] = item.key;
         this.Tree.push(a as Tree);
       });
     });
   }
 
   dataState() {
     this.crudApi
       .GetTreeList()
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
 
   deleteTree(tree) {
     if (window.confirm('Are sure you want to delete this tree ?')) {
       this.crudApi.DeleteTree(tree.$key);
       this.toastr.success(tree.commonname+ ' successfully deleted!');
     }
     

}}
