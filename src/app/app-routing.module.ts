import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MosaicosComponent } from './mosaicos/mosaicos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  //{ path: 'register', component: RegisterComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'mosaicos', component: MosaicosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
