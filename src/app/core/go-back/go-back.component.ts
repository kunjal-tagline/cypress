import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jewellery-shop-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.scss'],
})
export class GoBackComponent implements OnInit {
  @Input() goBackVisibleString?: string="Back";

  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {}

  public goBack(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['']);
    }
  }
}
