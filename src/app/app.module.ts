import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { CtaComponent } from './cta/cta.component';

const appRoutes : Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'work',
    component: WorkComponent
  },
  {
    path : 'services',
    component: ServicesComponent
  },
  {
    path : 'about',
    component: AboutComponent
  },
  {
    path : 'contact',
    component: ContactComponent
  },
  {
    path : 'work/:id',
    component: ErrorComponent
  }
]




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    FooterComponent,
    CtaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
