import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Shrubs } from '../shared/shrubs';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-shrubs',
  templateUrl: './shrubs.component.html',
  styleUrls: ['./shrubs.component.css']
})
export class ShrubsComponent implements OnInit {
  imageSrc='assets/images/clickupload.png'
  selectedImage: any=null;
  public shrubsForm: FormGroup;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private storage:AngularFireStorage
    
  ) {}

  ngOnInit() {
    
    this.shrubForm();
  }
 //img upload
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
  shrubForm() {
    this.shrubsForm = this.fb.group({
      commonname: ['',[Validators.required]],
      description: ['',[Validators.required]],
      image: [''],
      scientificname: ['',[Validators.required]],
      season: ['',[Validators.required]],
      treename:['',[Validators.required]]
       
      
    });
  }

  get commonname() {
    return this.shrubsForm.get('commonname');
  }

  get description() {
    return this.shrubsForm.get('description');
  }

  get image() {
    return this.shrubsForm.get('image');
  }

  get scientificname() {
    return this.shrubsForm.get('scientificname');
  }

 get season() {
    return this.shrubsForm.get('season');
  }
get treename() {
    return this.shrubsForm.get('treename');
  }

  ResetForm() {
    this.shrubsForm.reset();
  }

  submitShrubsData(formValue) {
    if(this.shrubsForm.valid){
      var filePath=`imagePost/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef=this.storage.ref(filePath);
      this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
         finalize(()=>{
           fileRef.getDownloadURL().subscribe((url)=>{
             formValue['image']=url;
             this.crudApi.AddShrubs(formValue);
           })
           this.toastr.success(
            this.shrubsForm.controls['commonname'].value + ' successfully added!'
          );
          this.ResetForm();
         })
      ).subscribe()
    }
  }

}
