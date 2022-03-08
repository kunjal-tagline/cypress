import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'jewellery-shop-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public userData: any;
  public allUsersData: any;
  public singleUserData: any;

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private Router: Router,
    private db: AngularFireDatabase
  ) {}

  ngOnInit(): void {
    const emailRegEx: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

    this.loginForm = this.fb.group({
      email: ['admin.kunjal@gmail.com', Validators.pattern(emailRegEx)],
      password: [
        '123456',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ]),
      ],
    });
  }

  get email() {
    return this.loginForm.value.email;
  }

  get password() {
    return this.loginForm.value.password;
  }

  public loginSubmit(): void {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).then((res: any) => {
      let allData: any;
      allData = this.db.database.ref('/users');
      allData.on('value', (data: any) => {
        this.allUsersData = Object.keys(data.val()).map((key) => {
          return {
            ...data.val()[key],
            push_key: key,
          };
        });
        this.singleUserData = this.allUsersData.find(
          (e: any) => e.email === email
        );
        if (this.singleUserData.role === 'customer') {
          localStorage.setItem('customerId', this.singleUserData.push_key);
          this.Router.navigate(['/customer']);
        } else if (this.singleUserData.role === 'admin') {
          this.Router.navigate(['/admin']);
        }
      });
    });
  }
}
