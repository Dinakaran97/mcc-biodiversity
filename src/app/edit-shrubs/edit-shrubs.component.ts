import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Shrubs } from '../shared/shrubs';
declare const $: any;
@Component({
  selector: 'app-edit-shrubs',
  templateUrl: './edit-shrubs.component.html',
  styleUrls: ['./edit-shrubs.component.css']
})
export class EditShrubsComponent implements OnInit {
  selectedFiles?: FileList;
  currentFileUpload?: Shrubs;
  percentage = 0;
  editshrubsForm: FormGroup;
  imageSrc='assets/images/clickupload.png'
  selectedImage: any=null;
  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    
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
  ngAfterViewInit(): void {
    $('.dropify').dropify();
     }
     selectFile(event: any): void {
       this.selectedFiles = event.target.files;
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
