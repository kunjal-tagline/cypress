import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public selectedCategory$:any = new BehaviorSubject('home');
  constructor() { }
}
