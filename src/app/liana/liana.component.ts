import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-liana',
  templateUrl: './liana.component.html',
  styleUrls: ['./liana.component.css']
})
export class LianaComponent implements OnInit {

  public lianaForm: FormGroup;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    
    this.lianForm();
  }

  lianForm() {
    this.lianaForm = this.fb.group({
      commonname: [''],
      description: [''],
      image: [''],
      scientificname: [''],
      season: [''],
      treename:['']
       
      
    });
  }

  get commonname() {
    return this.lianaForm.get('commonname');
  }

  get description() {
    return this.lianaForm.get('description');
  }

  get image() {
    return this.lianaForm.get('image');
  }

  get scientificname() {
    return this.lianaForm.get('scientificname');
  }

 get season() {
    return this.lianaForm.get('season');
  }
get treename() {
    return this.lianaForm.get('treename');
  }

  ResetForm() {
    this.lianaForm.reset();
  }

  submitLianaData() {
    this.crudApi.AddLiana(this.lianaForm.value);
    this.toastr.success(
      this.lianaForm.controls['commonname'].value + ' successfully added!'
    );
    this.ResetForm();
  }

}
