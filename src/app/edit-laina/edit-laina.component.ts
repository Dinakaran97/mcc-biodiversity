import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-laina',
  templateUrl: './edit-laina.component.html',
  styleUrls: ['./edit-laina.component.css']
})
export class EditLainaComponent implements OnInit {

  editlianaForm: FormGroup;

  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.updateLianaData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetLiana(id)
      .valueChanges()
      .subscribe((data) => {
        this.editlianaForm.setValue(data);
      });
  }

get commonname() {
    return this.editlianaForm.get('commonname');
  }

  get description() {
    return this.editlianaForm.get('description');
  }

  get image() {
    return this.editlianaForm.get('image');
  }

  get scientificname() {
    return this.editlianaForm.get('scientificname');
  }

 get season() {
    return this.editlianaForm.get('season');
  }
get treename() {
    return this.editlianaForm.get('treename');
  }


  updateLianaData() {
    this.editlianaForm = this.fb.group({
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
    this.crudApi.UpdateLiana(this.editlianaForm.value);
    this.toastr.success(
      this.editlianaForm.controls['commonname'].value + ' updated successfully'
    );
    this.router.navigate(['']);
  }


}
