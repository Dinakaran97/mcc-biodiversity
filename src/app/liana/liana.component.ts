import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Liana } from '../shared/liana';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-liana',
  templateUrl: './liana.component.html',
  styleUrls: ['./liana.component.css']
})
export class LianaComponent implements OnInit {
  imageSrc='assets/images/clickupload.png'
  selectedImage: any=null;
  public lianaForm: FormGroup;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private storage:AngularFireStorage
    
  ) {}
  
     
  ngOnInit() {
    
    this.lianForm();
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
    

  lianForm() {
    this.lianaForm = this.fb.group({
      commonname: ['',[Validators.required]],
      description: ['',[Validators.required]],
      image: [''],
      scientificname: ['',[Validators.required]],
      season: ['',[Validators.required]],
      treename:['',[Validators.required]],
     
       
      
    });
  }

  get commonname() {
    return this.lianaForm.get('commonname');
  }

  get description() {
    return this.lianaForm.get('description');
  }

  get image() {
    return this.lianaForm.get('image');
  }

  get scientificname() {
    return this.lianaForm.get('scientificname');
  }

 get season() {
    return this.lianaForm.get('season');
  }
get treename() {
    return this.lianaForm.get('treename');
  }
  

  ResetForm() {
    this.lianaForm.reset();
  }

  submitLianaData(formValue) {
    if(this.lianaForm.valid){
      var filePath=`imagePost/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef=this.storage.ref(filePath);
      this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
         finalize(()=>{
           fileRef.getDownloadURL().subscribe((url)=>{
             formValue['image']=url;
             this.crudApi.AddLiana(formValue);
           })
           this.toastr.success(
            this.lianaForm.controls['commonname'].value + ' successfully added!'
          );
          this.ResetForm();
         })
      ).subscribe()
    }
  }

}
