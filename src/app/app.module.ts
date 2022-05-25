import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';;
import { DevextremeModule } from './shared/module/devextreme/Devextreme.module';
import { AppRoutingModule } from './app.routing';
import { DefaultlayoutComponent } from './layout/defaultlayout/defaultlayout.component';
import { JwtInterceptor } from './httpInterceptor/jwt.interceptor';
import { ErrorInterceptor } from './httpInterceptor/error.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DevextremeModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultlayoutComponent,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
