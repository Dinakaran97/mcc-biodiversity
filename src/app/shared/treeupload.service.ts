import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Tree } from './tree';
@Injectable({
  providedIn: 'root'
})
export class TreeuploadService {
  private basePath = '/tree-list';
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }
  
}
