import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Component({
  selector: 'app-edit-tree',
  templateUrl: './edit-tree.component.html',
  styleUrls: ['./edit-tree.component.css']
})
export class EditTreeComponent implements OnInit {

  edittreeForm: FormGroup;
  selectedImage: any=null;
  imageSrc='assets/images/clickupload.png'
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
    this.updateTreeData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetTree(id)
      .valueChanges()
      .subscribe((data) => {
        this.edittreeForm.setValue(data);
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
get commonname() {
    return this.edittreeForm.get('commonname');
  }

  get description() {
    return this.edittreeForm.get('description');
  }

  get image() {
    return this.edittreeForm.get('image');
  }

  get scientificname() {
    return this.edittreeForm.get('scientificname');
  }

 get season() {
    return this.edittreeForm.get('season');
  }
get treename() {
    return this.edittreeForm.get('treename');
  }


  updateTreeData() {
    this.edittreeForm = this.fb.group({
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
    this.crudApi.UpdateTree(this.edittreeForm.value);
    this.toastr.success(
      this.edittreeForm.controls['commonname'].value + ' updated successfully'
    );
    this.router.navigate(['']);
  }
}
