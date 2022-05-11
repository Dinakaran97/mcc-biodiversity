import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-shrubs',
  templateUrl: './shrubs.component.html',
  styleUrls: ['./shrubs.component.css']
})
export class ShrubsComponent implements OnInit {

  public shrubsForm: FormGroup;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    
    this.shrubForm();
  }

  shrubForm() {
    this.shrubsForm = this.fb.group({
      commonname: [''],
      description: [''],
      image: [''],
      scientificname: [''],
      season: [''],
      treename:['']
       
      
    });
  }

  get commonname() {
    return this.shrubsForm.get('commonname');
  }

  get description() {
    return this.shrubsForm.get('description');
  }

  get image() {
    return this.shrubsForm.get('image');
  }

  get scientificname() {
    return this.shrubsForm.get('scientificname');
  }

 get season() {
    return this.shrubsForm.get('season');
  }
get treename() {
    return this.shrubsForm.get('treename');
  }

  ResetForm() {
    this.shrubsForm.reset();
  }

  submitShrubsData() {
    this.crudApi.AddShrubs(this.shrubsForm.value);
    this.toastr.success(
      this.shrubsForm.controls['commonname'].value + ' successfully added!'
    );
    this.ResetForm();
  }

}
