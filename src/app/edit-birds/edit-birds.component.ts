import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-edit-birds',
  templateUrl: './edit-birds.component.html',
  styleUrls: ['./edit-birds.component.css']
})
export class EditBirdsComponent implements OnInit {

  editbirdsForm: FormGroup;
  imageSrc='assets/images/clickupload.png'
  selectedImage: any=null;
  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private storage:AngularFireStorage
  ) {}

  ngOnInit() {
    this.updateBirdsData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetBirds(id)
      .valueChanges()
      .subscribe((data) => {
        this.editbirdsForm.setValue(data);
      });
  }
//upload
showPreview(event:any){
  if(event.target.files && event.target.files[0]){
    const reader=new FileReader();
    reader.onload=(e:any) => this.imageSrc=e.target.result;
    reader.readAsDataURL(event.target.files[0]);
    this.selectedImage=event.target.files[0];
  }
  else{
    this.imageSrc='assets/images/clickupload.png';
    this.selectedImage=null;
  }
}
get classname() {
    return this.editbirdsForm.get( 'classname');
  }

  get commonname() {
    return this.editbirdsForm.get(' commonname');
  }

  get groupname() {
    return this.editbirdsForm.get('groupname');
  }

  get image() {
    return this.editbirdsForm.get('image');
  }

 get scientificname() {
    return this.editbirdsForm.get('scientificname');
  }

  updateBirdsData() {
    this.editbirdsForm = this.fb.group({
       classname: [''],
    commonname: [''],
      groupname: [''],
      image: [''],
      scientificname: [''],
    
    });
  }

  goBack() {
    this.location.back();
  }

  updateForm() {
    this.crudApi.UpdateBirds(this.editbirdsForm.value);
    this.toastr.success(
      this.editbirdsForm.controls['classname'].value + ' updated successfully'
    );
    this.router.navigate(['']);
  }
}
