import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DefaultlayoutComponent } from './layout/defaultlayout/defaultlayout.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: "",
    component: DefaultlayoutComponent,
    data: {
      title: "Home",
    },
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./component/home/home/home.module").then((m) => m.HomeModule)
      },
      {
        path: "home",
        loadChildren: () =>
          import("./component/home/home/home.module").then((m) => m.HomeModule)
      },
      {
        path: "temporarypayment",
        loadChildren: () =>
          import("./component/temporary-payments/temporary-payments.module").then((m) => m.TemporarypaymentsModule)
      },
    ],
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false, useHash: true, preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
