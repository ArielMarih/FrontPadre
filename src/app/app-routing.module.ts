import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './modules/clients/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "login", redirectTo: "auth/login", pathMatch: "full"
  },
  {
    path: "", component: SidebarComponent, loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule)
  },
  {
    path: "auth", loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
