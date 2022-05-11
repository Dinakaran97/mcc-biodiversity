import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-herbs',
  templateUrl: './edit-herbs.component.html',
  styleUrls: ['./edit-herbs.component.css']
})
export class EditHerbsComponent implements OnInit {

  editherbsForm: FormGroup;

  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.updateHerbsData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetHerbs(id)
      .valueChanges()
      .subscribe((data) => {
        this.editherbsForm.setValue(data);
      });
  }

get commonname() {
    return this.editherbsForm.get('commonname');
  }

  get description() {
    return this.editherbsForm.get('description');
  }

  get image() {
    return this.editherbsForm.get('image');
  }

  get scientificname() {
    return this.editherbsForm.get('scientificname');
  }

 get season() {
    return this.editherbsForm.get('season');
  }
get treename() {
    return this.editherbsForm.get('treename');
  }


  updateHerbsData() {
    this.editherbsForm = this.fb.group({
       commonname: [''],
      description: [''],
      image: [''],
      scientificname: [''],
      season: [''],
      treename:['']
    });
  }

  goBack() {
    this.location.back();
  }

  updateForm() {
    this.crudApi.UpdateHerbs(this.editherbsForm.value);
    this.toastr.success(
      this.editherbsForm.controls['commonname'].value + ' updated successfully'
    );
    this.router.navigate(['']);
  }

}
