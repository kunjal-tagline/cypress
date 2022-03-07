import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'jewellery-shop-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    const emailRegEx: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

    this.signUpForm = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      email: ['', Validators.pattern(emailRegEx)],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ]),
      ],
    });
  }

  public signUpformSubmit(): void {
    const signUpFormValue = this.signUpForm.value;
    this.userService.userSignUp(signUpFormValue).subscribe();
  }
}
