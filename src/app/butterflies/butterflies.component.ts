import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-butterflies',
  templateUrl: './butterflies.component.html',
  styleUrls: ['./butterflies.component.css']
})
export class ButterfliesComponent implements OnInit {

  public butterflyForm: FormGroup;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    
    this.butterflForm();
  }

  butterflForm() {
    this.butterflyForm = this.fb.group({
      commonname: [''],
      description: [''],
      familyname: [''],
      hostplants: [''],
      image: [''],
      scientificname: [''],
   
       
      
    });
  }

  get commonname() {
    return this.butterflyForm.get('commonname');
  }

  get description() {
    return this.butterflyForm.get('description');
  }
 get familyname() {
    return this.butterflyForm.get('familyname');
  }
get  hostplants() {
    return this.butterflyForm.get('hostplants');
  }

  get image() {
    return this.butterflyForm.get('image');
  }

  get scientificname() {
    return this.butterflyForm.get('scientificname');
  }



  ResetForm() {
    this.butterflyForm.reset();
  }

  submitButterflyData() {
    this.crudApi.AddButterfly(this.butterflyForm.value);
    this.toastr.success(
      this.butterflyForm.controls['commonname'].value + ' successfully added!'
    );
    this.ResetForm();
  }

}
