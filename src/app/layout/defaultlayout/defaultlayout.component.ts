import { UserService } from './../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDrawerComponent } from 'devextreme-angular';
import { List, Service } from '@app/app.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { returnMsg } from '@app/models/returnMsgModel';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-defaultlayout',
  templateUrl: './defaultlayout.component.html',
  styleUrls: ['./defaultlayout.component.scss'],
  providers: [Service],
  preserveWhitespaces: true,
})
export class DefaultlayoutComponent implements OnInit {
  @ViewChild(DxDrawerComponent) drawer: DxDrawerComponent;

  menuOpen = true;

  articleFull = false;

  visibility: string;

  subMenuActive = false;

  loading = false;

  returnMsg: returnMsg[]

  menuItems = [];

  subMenuItems = [];

  userName;

  currentPath = '首頁';

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService) {
  }

  ngOnInit() {
    const currentUser = this.authenticationService.currentUserValue;
    if (!currentUser) {
      // logged in so return true
      this.router.navigate(['/login']);
      return false;
    }

    this.userService.AuthInfo().pipe(first()).subscribe(returnMsg => {
      this.loading = false;
      this.returnMsg = returnMsg;
      this.userName = returnMsg.data.name;
    });

    this.userService.getMenu().pipe(first()).subscribe(menu => {
      for (let i = 0; i < menu.data.length; i++) {
        if (menu.data[i].parentCode == null) {
          this.menuItems.push(menu.data[i])
        } else {
          this.subMenuItems.push(menu.data[i])
        }
      }
    });
  }

  menuToggle() {
    this.menuOpen = !this.menuOpen;
    this.articleFull = !this.articleFull;
    console.log('menuOpen' + this.menuOpen);
  }

  subMenuToggle(e) {
    if (e.target.classList.contains('menuItem')) {
      if (e.target.id == 'goToHomePage') {
        this.visibility = '';
        this.currentPath = '首頁';
        return;
      }
      if (this.visibility == e.target.id) {
        this.visibility = '';
        return
      }
      this.visibility = e.target.id;
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
