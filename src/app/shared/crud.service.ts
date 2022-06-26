import { Injectable } from '@angular/core';
import { Tree } from './tree';
import { Shrubs } from './shrubs';
import { Herbs} from '../shared/herbs';
import { Liana } from './liana';
import { Observable } from 'rxjs';
import { Birds } from './birds';
import { finalize } from 'rxjs/operators';
import { Butterfly } from './butterfly';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
  
  
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  
  private basePath = '/shrubs-list';
  herbssRef: AngularFireList<any>;
  herbsRef: AngularFireObject<any>;
  shrubssRef: AngularFireList<any>;
  shrubsRef: AngularFireObject<any>;
  lianasRef: AngularFireList<any>;
  lianaRef: AngularFireObject<any>;
  treesRef: AngularFireList<any>;
  treeRef: AngularFireObject<any>;
  birdssRef: AngularFireList<any>;
  birdsRef: AngularFireObject<any>;
  butterflysRef: AngularFireList<any>;
  butterflyRef: AngularFireObject<any>;
  //image upload shrubs
  
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {
    
  }
 
  
  // Create herbs
  AddHerbs(herbs: Herbs) {
    this.herbssRef.push({
     commonname: herbs.commonname,
     description: herbs.description,
     image: herbs.image,
    scientificname: herbs.scientificname,
    season: herbs.season,
    treename: herbs.treename,
    
    
    });
  }
  
  UpdateHerbs(herbs: Herbs) {
    this.herbsRef.update({
      commonname: herbs.commonname,
     description: herbs.description,
     image: herbs.image,
    scientificname: herbs.scientificname,
    season: herbs.season,
    treename: herbs.treename
    });
  }
  GetHerbs(id: string) {
    this.herbsRef = this.db.object('herbs/' + id);
    return this.herbsRef;
  }

  GetHerbsList() {
    this.herbssRef = this.db.list('herbs');
    return this.herbssRef;
  }
  DeleteHerbs(id: string) {
    this.herbsRef = this.db.object('herbs' + id);
    this.herbsRef.remove();
  }
 //create shrubs
 AddShrubs(shrubs: Shrubs){
  this.shrubssRef.push({
   commonname: shrubs.commonname,
   description: shrubs.description,
   image: shrubs.image,
  scientificname: shrubs.scientificname,
  season: shrubs.season,
  treename: shrubs.treename,
  
 
 
  
  
 
 
 
 


 });

}


//update shrubs
UpdateShrubs(shrubs: Shrubs) {
  this.shrubsRef.update({
    commonname: shrubs.commonname,
   description: shrubs.description,
   image: shrubs.image,
  scientificname: shrubs.scientificname,
  season:shrubs.season,
  treename: shrubs.treename
  });
}

GetShrubs(id: string) {
  this.shrubsRef = this.db.object('shrubs/' + id);
  return this.shrubsRef;
}

GetShrubsList() {
  this.shrubssRef = this.db.list('shrubs');
  return this.shrubssRef;
}

DeleteShrubs(id: string) {
  this.shrubsRef = this.db.object('shrubs' + id);
  this.shrubsRef.remove();
}
//create liana
AddLiana(liana: Liana) {
  this.lianasRef.push({
   commonname: liana.commonname,
   description: liana.description,
   image: liana.image,
  scientificname: liana.scientificname,
  season: liana.season,
  treename: liana.treename
 } );
}

//update liana
UpdateLiana(liana: Liana) {
  this.lianaRef.update({
    commonname: liana.commonname,
   description: liana.description,
   image: liana.image,
  scientificname: liana.scientificname,
  season:liana.season,
  treename: liana.treename
  });
}

GetLiana(id: string) {
  this.lianaRef = this.db.object('liana/' + id);
  return this.lianaRef;
}
GetLianaList() {
  this.lianasRef = this.db.list('liana');
  return this.lianasRef;
}
DeleteLiana(id: string) {
  this.lianaRef = this.db.object('liana/' + id);
  this.lianaRef.remove();
}

//create tree
AddTree(tree: Tree) {
  this.treesRef.push({
   commonname: tree.commonname,
   description: tree.description,
   image: tree.image,
  scientificname: tree.scientificname,
  season: tree.season,
  treename: tree.treename
  });
}
//update tree
UpdateTree(tree: Tree) {
  this.treeRef.update({
    commonname: tree.commonname,
   description: tree.description,
   image: tree.image,
  scientificname: tree.scientificname,
  season: tree.season,
  treename: tree.treename
  });
}

GetTree(id: string) {
  this.treeRef = this.db.object('tree/' + id);
  return this.treeRef;
}

GetTreeList() {
  this.treesRef = this.db.list('tree');
  return this.treesRef;
}

DeleteTree(id: string) {
  this.treeRef = this.db.object('tree/' + id);
  this.treeRef.remove();
}


//create birds
AddBirds(birds: Birds) {
  this.birdssRef.push({
    classname: birds.classname,
   commonname: birds.commonname,
   groupname:birds.groupname,
   image: birds.image,
  scientificname: birds.scientificname,
  
  });
}

//update birds
UpdateBirds(birds: Birds) {
  this.herbsRef.update({
    classname: birds.classname,
    commonname: birds.commonname,
    groupname:birds.groupname,
   image: birds.image,
  scientificname: birds.scientificname,
 
  });
}

GetBirds(id: string) {
  this.birdsRef = this.db.object('birds/' + id);
  return this.birdsRef;
}

GetBirdsList() {
  this.birdssRef = this.db.list('birds');
  return this.birdssRef;
}

 DeleteBirds(id: string) {
    this.birdsRef = this.db.object('birds/' + id);
    this.birdsRef.remove();
  }
//create butterfly
AddButterfly(butterfly: Butterfly) {
  this.butterflysRef.push({
   commonname: butterfly.commonname,
   description:  butterfly.description,
   hostplants: butterfly.hostplants,
   familyname: butterfly.familyname,
   image:  butterfly.image,
  scientificname:  butterfly.scientificname,
 
  });
}
//update butterfly
UpdateButterfly(butterfly: Butterfly) {
  this.butterflyRef.update({
    commonname: butterfly.commonname,
   description:  butterfly.description,
   hostplants: butterfly.hostplants,
   familyname: butterfly.familyname,
   image:  butterfly.image,
  scientificname:  butterfly.scientificname,

  });
}

GetButterfly(id: string) {
  this.butterflyRef = this.db.object('butterfly/' + id);
  return this.butterflyRef;
}

GetButterflyList() {
  this.butterflysRef = this.db.list('butterfly');
  return this.butterflysRef;
}
DeleteButterfly(id: string) {
  this.butterflyRef = this.db.object('butterfly/' + id);
  this.butterflyRef.remove();
}
}