import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-butterflies',
  templateUrl: './butterflies.component.html',
  styleUrls: ['./butterflies.component.css']
})
export class ButterfliesComponent implements OnInit {
  imageSrcs='assets/images/clickupload.png'
  selectedImage: any=null;
  public butterflyForm: FormGroup;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private storage:AngularFireStorage
  ) {}

  ngOnInit() {
    
    this.butterflForm();
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
  butterflForm() {
    this.butterflyForm = this.fb.group({
      commonname: ['',[Validators.required]],
      description: ['',[Validators.required]],
      familyname: ['',[Validators.required]],
      hostplants: ['',[Validators.required]],
      image: [''],
      scientificname: ['',[Validators.required]],
   
       
      
    });
  }

  get commonname() {
    return this.butterflyForm.get('commonname');
  }

  get description() {
    return this.butterflyForm.get('description');
  }
 get familyname() {
    return this.butterflyForm.get('familyname');
  }
get  hostplants() {
    return this.butterflyForm.get('hostplants');
  }

  get image() {
    return this.butterflyForm.get('image');
  }

  get scientificname() {
    return this.butterflyForm.get('scientificname');
  }



  ResetForm() {
    this.butterflyForm.reset();
  }

  submitButterflyData(formValue) {
    if(this.butterflyForm.valid){
      var filePath=`imagePost/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef=this.storage.ref(filePath);
      this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
         finalize(()=>{
           fileRef.getDownloadURL().subscribe((url)=>{
             formValue['image']=url;
             this.crudApi.AddButterfly(formValue);
           })
           this.toastr.success(
            this.butterflyForm.controls['commonname'].value + ' successfully added!'
          );
          this.ResetForm();
         })
      ).subscribe()
    }
  }

}
