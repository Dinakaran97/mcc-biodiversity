import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  public treeForm: FormGroup;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    
    this.treForm();
  }

  treForm() {
    this.treeForm = this.fb.group({
      commonname: [''],
      description: [''],
      image: [''],
      scientificname: [''],
      season: [''],
      treename:['']
       
      
    });
  }

  get commonname() {
    return this.treeForm.get('commonname');
  }

  get description() {
    return this.treeForm.get('description');
  }

  get image() {
    return this.treeForm.get('image');
  }

  get scientificname() {
    return this.treeForm.get('scientificname');
  }

 get season() {
    return this.treeForm.get('season');
  }
get treename() {
    return this.treeForm.get('treename');
  }

  ResetForm() {
    this.treeForm.reset();
  }

  submitTreeData() {
    this.crudApi.AddTree(this.treeForm.value);
    this.toastr.success(
      this.treeForm.controls['commonname'].value + ' successfully added!'
    );
    this.ResetForm();
  }

}
