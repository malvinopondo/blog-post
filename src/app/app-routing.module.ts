import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermConditionsComponent } from './pages/term-conditions/term-conditions.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'category', component: SingleCategoryComponent },
  {path:'post',component: SinglePostComponent},

  {path:'contact',component: ContactUsComponent},
  {path:'about', component: AboutUsComponent},
  {path:'terms', component: TermConditionsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
