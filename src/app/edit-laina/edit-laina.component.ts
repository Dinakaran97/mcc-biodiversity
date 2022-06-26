import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-edit-laina',
  templateUrl: './edit-laina.component.html',
  styleUrls: ['./edit-laina.component.css']
})
export class EditLainaComponent implements OnInit {
  imageSrc='assets/images/clickupload.png'
  selectedImage: any=null;
  editlianaForm: FormGroup;

  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private storage:AngularFireStorage
  ) {}
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

  updateForm(formValue) {
    if(this.editlianaForm.valid){
      var filePath=`imagePost/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef=this.storage.ref(filePath);
      this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
         finalize(()=>{
           fileRef.getDownloadURL().subscribe((url)=>{
             formValue['image']=url;
             this.crudApi.AddLiana(formValue);
           })
           this.toastr.success(
            this.editlianaForm.controls['commonname'].value + ' successfully updated!'
          );
          
         })
      ).subscribe()
    }
  }

}
