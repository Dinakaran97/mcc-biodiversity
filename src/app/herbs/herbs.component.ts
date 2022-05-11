import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-herbs',
  templateUrl: './herbs.component.html',
  styleUrls: ['./herbs.component.css']
})
export class HerbsComponent implements OnInit {

 
  public herbsForm: FormGroup;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    
    this.herbForm();
  }

  herbForm() {
    this.herbsForm = this.fb.group({
      commonname: [''],
      description: [''],
      image: [''],
      scientificname: [''],
      season: [''],
      treename:['']
       
      
    });
  }

  get commonname() {
    return this.herbsForm.get('commonname');
  }

  get description() {
    return this.herbsForm.get('description');
  }

  get image() {
    return this.herbsForm.get('image');
  }

  get scientificname() {
    return this.herbsForm.get('scientificname');
  }

 get season() {
    return this.herbsForm.get('season');
  }
get treename() {
    return this.herbsForm.get('treename');
  }

  ResetForm() {
    this.herbsForm.reset();
  }

  submitHerbsData() {
    this.crudApi.AddHerbs(this.herbsForm.value);
    this.toastr.success(
      this.herbsForm.controls['commonname'].value + ' successfully added!'
    );
    this.ResetForm();
  }

}
