import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ClientsRoutingModule } from './clients-routing.module';



@NgModule({
  declarations: [
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ClientsRoutingModule
  ],
  bootstrap: [SidebarComponent]
})
export class ClientsModule { }
