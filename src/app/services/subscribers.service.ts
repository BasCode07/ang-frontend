import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs: AngularFirestore) { }

  addSub(subData){
    this.afs.collection('subscribers').add(subData).then(() =>{
      console.log('subscriber save successfully');
      
    })
  }

  checkSub(subEmail){
  return  this.afs.collection('subscribers', ref => ref.where('email', '==', subEmail)).get()
  }
}
