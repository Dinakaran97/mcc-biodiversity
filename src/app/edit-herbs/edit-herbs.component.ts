import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-edit-herbs',
  templateUrl: './edit-herbs.component.html',
  styleUrls: ['./edit-herbs.component.css']
})
export class EditHerbsComponent implements OnInit {
  imageSrc='assets/images/clickupload.png'
  selectedImage: any=null;
  editherbsForm: FormGroup;

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
    this.updateHerbsData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi
      .GetHerbs(id)
      .valueChanges()
      .subscribe((data) => {
        this.editherbsForm.setValue(data);
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

  updateForm( formValue) {
    if(this.editherbsForm.valid){
      var filePath=`imagePost/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef=this.storage.ref(filePath);
      this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
         finalize(()=>{
           fileRef.getDownloadURL().subscribe((url)=>{
             formValue['image']=url;
             this.crudApi.AddHerbs(formValue);
           })
           this.toastr.success(
            this.editherbsForm.controls['commonname'].value + ' successfully updated!'
          );
          
         })
      ).subscribe()
    }
  }
  }


