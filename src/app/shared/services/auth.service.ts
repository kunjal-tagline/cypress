import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFireAuth:AngularFireAuth) {}

  login(username:string,password:string){
   // return signInWithEmailAndPassword(this.angularFireAuth,username,password);
  }
}
