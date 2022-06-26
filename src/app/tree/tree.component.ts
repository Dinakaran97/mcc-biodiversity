import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { url } from 'inspector';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  imageSrc='assets/images/clickupload.png'
  selectedImage: any=null;
  public treeForm: FormGroup;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private storage:AngularFireStorage
  ) {}

  ngOnInit() {
    
    this.treForm();
  }
  //preview
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
  treForm() {
    this.treeForm = this.fb.group({
      commonname: [''],
      description: [''],
      image: [''],
      scientificname: [''],
      season: [''],
      treename:['']
       
      
    });
  }

  get commonname() {
    return this.treeForm.get('commonname');
  }

  get description() {
    return this.treeForm.get('description');
  }

  get image() {
    return this.treeForm.get('image');
  }

  get scientificname() {
    return this.treeForm.get('scientificname');
  }

 get season() {
    return this.treeForm.get('season');
  }
get treename() {
    return this.treeForm.get('treename');
  }

  ResetForm() {
    this.treeForm.reset();
  }

  submitTreeData(formValue) {
   
    if(this.treeForm.valid){
      var filePath=`imagePost/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef=this.storage.ref(filePath);
      this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
         finalize(()=>{
           fileRef.getDownloadURL().subscribe((url)=>{
             formValue['image']=url;
             this.crudApi.AddTree(formValue);
           })
           this.toastr.success(
            this.treeForm.controls['commonname'].value + ' successfully added!'
          );
          this.ResetForm();
         })
      ).subscribe()
    }
    
  }

}
