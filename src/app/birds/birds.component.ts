import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {
  imageSrcs='assets/images/clickupload.png'
  selectedImage: any=null;
  public birdsForm: FormGroup;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private storage:AngularFireStorage
  ) {}

  ngOnInit() {
    
    this.birdForm();
  }
//upload
showPreview(event:any){
  if(event.target.files && event.target.files[0]){
    const reader=new FileReader();
    reader.onload=(e:any) => this.imageSrcs=e.target.result;
    reader.readAsDataURL(event.target.files[0]);
    this.selectedImage=event.target.files[0];
  }
  else{
    this.imageSrcs='assets/images/clickupload.png';
    this.selectedImage=null;
  }
}
  birdForm() {
    this.birdsForm = this.fb.group({
      classname: ['',[Validators.required]],
    commonname: ['',[Validators.required]],
      groupname: ['',[Validators.required]],
      image: [''],
      scientificname: ['',[Validators.required]],
    
       
      
    });
  }

  get classname() {
    return this.birdsForm.get( 'classname');
  }

  get commonname() {
    return this.birdsForm.get(' commonname');
  }

  get groupname() {
    return this.birdsForm.get('groupname');
  }

  get image() {
    return this.birdsForm.get('image');
  }

 get scientificname() {
    return this.birdsForm.get('scientificname');
  }


  ResetForm() {
    this.birdsForm.reset();
  }

  submitBirdsData(formValue) {
    if(this.birdsForm.valid){
      var filePath=`imagePost/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef=this.storage.ref(filePath);
      this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
         finalize(()=>{
           fileRef.getDownloadURL().subscribe((url)=>{
             formValue['image']=url;
             this.crudApi.AddBirds(formValue);
           })
           this.toastr.success(
            this.birdsForm.controls['commonname'].value + ' successfully added!'
          );
          this.ResetForm();
         })
      ).subscribe()
    }
  }
}
