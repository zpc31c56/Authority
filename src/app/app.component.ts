import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Observable, timer } from 'rxjs';
import { repeat, takeUntil } from 'rxjs/operators';
import { returnMsg } from './models/returnMsgModel';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
    currentUser: returnMsg;
    displayTimer$ :Observable<number>;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
      const idleTime$ = timer(0,1000);
      const mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');

      idleTime$.pipe(takeUntil(mouseMove$),repeat()).subscribe(time=>{
        if(time >= 1200){
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }
      });
    }


    logout() {
      this.authenticationService.logout()

      this.router.navigate(['/login']);
    }
}
