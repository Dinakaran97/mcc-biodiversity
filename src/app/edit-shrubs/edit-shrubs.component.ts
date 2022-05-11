import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-shrubs',
  templateUrl: './edit-shrubs.component.html',
  styleUrls: ['./edit-shrubs.component.css']
})
export class EditShrubsComponent implements OnInit {

  editshrubsForm: FormGroup;

  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.updateShrubsData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetShrubs(id)
      .valueChanges()
      .subscribe((data) => {
        this.editshrubsForm.setValue(data);
      });
  }

get commonname() {
    return this.editshrubsForm.get('commonname');
  }

  get description() {
    return this.editshrubsForm.get('description');
  }

  get image() {
    return this.editshrubsForm.get('image');
  }

  get scientificname() {
    return this.editshrubsForm.get('scientificname');
  }

 get season() {
    return this.editshrubsForm.get('season');
  }
get treename() {
    return this.editshrubsForm.get('treename');
  }


  updateShrubsData() {
    this.editshrubsForm = this.fb.group({
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
    this.crudApi.UpdateShrubs(this.editshrubsForm.value);
    this.toastr.success(
      this.editshrubsForm.controls['commonname'].value + ' updated successfully'
    );
    this.router.navigate(['']);
  }

}
