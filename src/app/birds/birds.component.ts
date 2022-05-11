import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {

  public birdsForm: FormGroup;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) {}

  ngOnInit() {
    
    this.birdForm();
  }

  birdForm() {
    this.birdsForm = this.fb.group({
      classname: [''],
    commonname: [''],
      groupname: [''],
      image: [''],
      scientificname: [''],
    
       
      
    });
  }

  get classname() {
    return this.birdsForm.get( 'classname');
  }

  get commonname() {
    return this.birdsForm.get(' commonname');
  }

  get groupname() {
    return this.birdsForm.get('groupname');
  }

  get image() {
    return this.birdsForm.get('image');
  }

 get scientificname() {
    return this.birdsForm.get('scientificname');
  }


  ResetForm() {
    this.birdsForm.reset();
  }

  submitBirdsData() {
    this.crudApi.AddBirds(this.birdsForm.value);
    this.toastr.success(
      this.birdsForm.controls['classname'].value + ' successfully added!'
    );
    this.ResetForm();
  }
}
