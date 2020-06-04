import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './home/shop/shop.component';
import { AboutComponent } from './home/about/about.component';
import { BlogComponent } from './home/blog/blog.component';
import { contactComponent } from './home/contact/contact.component';
import { HbanerComponent } from './home/hbaner/hbaner.component';
import { BfooterComponent } from './home/bfooter/bfooter.component';
import { AbanerComponent } from './home/about/abaner/abaner.component';
import { AcontainerComponent } from './home/about/acontainer/acontainer.component';
import { AstoryComponent } from './home/about/astory/astory.component';
import { AteamComponent } from './home/about/ateam/ateam.component';
import { BbanerComponent } from './home/blog/bbaner/bbaner.component';
import { BdetailsComponent } from './home/blog/bdetails/bdetails.component';
import { BnewsComponent } from './home/blog/bnews/bnews.component';
import { BkitComponent } from './home/blog/bkit/bkit.component';
import { SfooterComponent } from './home/sfooter/sfooter.component';
import { CbanerComponent } from './home/contact/cbaner/cbaner.component';
import { CbodyComponent } from './home/contact/cbody/cbody.component';
import { CmapComponent } from './home/contact/cmap/cmap.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        ShopComponent,
        AboutComponent,
        BlogComponent,
        contactComponent,
        HbanerComponent,
        BfooterComponent,
        AbanerComponent,
        AcontainerComponent,
        AstoryComponent,
        AteamComponent,
        BbanerComponent,
        BdetailsComponent,
        BnewsComponent,
        BkitComponent,
        SfooterComponent,
        CbanerComponent,
        CbodyComponent,
        CmapComponent,
     
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
