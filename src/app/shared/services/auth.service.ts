import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  public login(email: string, password: string) {
    // return from(
      return this.angularFireAuth.signInWithEmailAndPassword(email, password);
    // );
  }

  public logout() {
    return from(this.angularFireAuth.signOut());
  }
}
