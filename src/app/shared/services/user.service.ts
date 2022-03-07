import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  public url = 'https://jewellery-shop-770d8-default-rtdb.firebaseio.com/';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}
  public userSignUp(formValue: any): Observable<any> {
    return this.httpClient.post(this.url + '/users.json', formValue);
  }
}
