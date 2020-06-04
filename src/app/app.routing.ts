import { contactComponent } from './home/contact/contact.component';
import { ShopComponent } from './home/shop/shop.component';
import { BlogComponent } from './home/blog/blog.component';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    {path:'',                        component: HomeComponent},
    { path: 'about',                component: AboutComponent },
    { path: 'blog',     component: BlogComponent},
    { path: 'shop',       component: ShopComponent },
    { path: 'contact',     component: contactComponent },
    { path: 'home',     component: HomeComponent},
  
    { path: 'components',     component: ComponentsComponent}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
