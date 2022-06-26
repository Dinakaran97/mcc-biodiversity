import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Component({
  selector: 'app-edit-butterflies',
  templateUrl: './edit-butterflies.component.html',
  styleUrls: ['./edit-butterflies.component.css']
})
export class EditButterfliesComponent implements OnInit {

  editbutterflyForm: FormGroup;
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
    this.updateButterflyData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetButterfly(id)
      .valueChanges()
      .subscribe((data) => {
        this.editbutterflyForm.setValue(data);
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
