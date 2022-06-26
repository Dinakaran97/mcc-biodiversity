import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-herbs',
  templateUrl: './herbs.component.html',
  styleUrls: ['./herbs.component.css']
})
export class HerbsComponent implements OnInit {
  imageSrc='assets/images/clickupload.png'
  selectedImage: any=null;
 
  public herbsForm: FormGroup;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private storage:AngularFireStorage
  ) {}

  ngOnInit() {
    
    this.herbForm();
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
  herbForm() {
    this.herbsForm = this.fb.group({
      commonname: ['',[Validators.required]],
      description: ['',[Validators.required]],
      image: [''],
      scientificname: ['',[Validators.required]],
      season: ['',[Validators.required]],
      treename:['',[Validators.required]]
       
      
    });
  }

  get commonname() {
    return this.herbsForm.get('commonname');
  }

  get description() {
    return this.herbsForm.get('description');
  }

  get image() {
    return this.herbsForm.get('image');
  }

  get scientificname() {
    return this.herbsForm.get('scientificname');
  }

 get season() {
    return this.herbsForm.get('season');
  }
get treename() {
    return this.herbsForm.get('treename');
  }

  ResetForm() {
    this.herbsForm.reset();
  }

  submitHerbsData(formValue) {
    if(this.herbsForm.valid){
      var filePath=`imagePost/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef=this.storage.ref(filePath);
      this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
         finalize(()=>{
           fileRef.getDownloadURL().subscribe((url)=>{
             formValue['image']=url;
             this.crudApi.AddHerbs(formValue);
           })
           this.toastr.success(
            this.herbsForm.controls['commonname'].value + ' successfully added!'
          );
          this.ResetForm();
         })
      ).subscribe()
    }
  }

}
