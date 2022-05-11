import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-butterflies',
  templateUrl: './edit-butterflies.component.html',
  styleUrls: ['./edit-butterflies.component.css']
})
export class EditButterfliesComponent implements OnInit {

  editbutterflyForm: FormGroup;

  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.updateButterflyData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetButterfly(id)
      .valueChanges()
      .subscribe((data) => {
        this.editbutterflyForm.setValue(data);
      });
  }

get commonname() {
    return this.editbutterflyForm.get('commonname');
  }

  get description() {
    return this.editbutterflyForm.get('description');
  }
 get familyname() {
    return this.editbutterflyForm.get('familyname');
  }
get hostplants() {
    return this.editbutterflyForm.get('hostplants');
  }

  get image() {
    return this.editbutterflyForm.get('image');
  }

  get scientificname() {
    return this.editbutterflyForm.get('scientificname');
  }




  updateButterflyData() {
    this.editbutterflyForm = this.fb.group({
       commonname: [''],
      description: [''],
      familyname: [''],
       hostplants: [''],
      image: [''],
      scientificname: [''],
     
    });
  }

  goBack() {
    this.location.back();
  }

  updateForm() {
    this.crudApi.UpdateButterfly(this.editbutterflyForm.value);
    this.toastr.success(
      this.editbutterflyForm.controls['commonname'].value + ' updated successfully'
    );
    this.router.navigate(['']);
  }

}
