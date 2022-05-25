import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '@app/services/authentication.service';


@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  account: string = '';
  password: string = '';

  loadingVisible = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  LoginEnter(event) {
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  }

  onSubmit() {
    this.loadingVisible = true;
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.account, this.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          this.loadingVisible = false;
        },
        error => {
          this.error = error;
          this.loading = false;
          this.loadingVisible = false;
          alert("帳號或密碼錯誤");
        });
  }
}
