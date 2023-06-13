import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersRoutingModule } from './user-routing.modules';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }
