// import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
// import { AngularFireStorage } from '@angular/fire/compat/storage';

// import { Observable } from 'rxjs';
// import { finalize } from 'rxjs/operators';
// import { Liana } from './liana';
// @Injectable({
//   providedIn: 'root'
// })
// export class LianafileUploadService {
//   private basePath = '/liana-list';
  
//   constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

//   pushFileToStorage(fileUpload: Liana): Observable<number | undefined> {
//     const filePath = `${this.basePath}/${fileUpload.file.name}`;
//     const storageRef = this.storage.ref(filePath);
//     const uploadTask = this.storage.upload(filePath, fileUpload.file);

//     uploadTask.snapshotChanges().pipe(
//       finalize(() => {
//         storageRef.getDownloadURL().subscribe(downloadURL => {
//           fileUpload.image = downloadURL;
//           fileUpload.name = fileUpload.file.name;
//           this.saveFileData(fileUpload);
//         });
//       })
//     ).subscribe();
                
//     return uploadTask.percentageChanges();
//   }

//   private saveFileData(fileUpload: Liana): void {
//     this.db.list(this.basePath).push(fileUpload);
//   }
  
// }
