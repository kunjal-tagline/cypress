import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'jewellery-shop-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    const emailRegEx: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

    this.loginForm = this.fb.group({
      email: ['', Validators.pattern(emailRegEx)],
      password: [
        '',
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
    this.authService.login(email, password).subscribe(() => {});
  }
}
