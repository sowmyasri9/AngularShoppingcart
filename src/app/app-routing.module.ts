import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { CheckItemsComponent } from './check-items/check-items.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'about',component:AboutComponent ,canActivate: [AuthGuard]},
  {path:'logout',component:LogoutComponent ,canActivate: [AuthGuard]},
  {path:'check-items',component:CheckItemsComponent ,canActivate: [AuthGuard]},
  {path:'payment',component:PaymentComponent ,canActivate: [AuthGuard]},
  {path:'signup',component:SignupComponent},
{path:'**',component:NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
