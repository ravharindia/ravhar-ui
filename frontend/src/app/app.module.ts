import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app.routing';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap';
import { AppComponent } from './shared/app/app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FrontComponent } from './routes/front/front.component';
import { HomeComponent } from './routes/home/home.component';
import { BannerComponent } from './shared/banner/banner.component';
import { ProductlistComponent } from './routes/productlist/productlist.component';
import { FooterComponent } from './routes/footer/footer.component';
import { ProductboxComponent } from './shared/productbox/productbox.component';
import { AccountComponent } from './routes/account/account.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { AccountinComponent } from './shared/accountin/accountin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FrontComponent,
    HomeComponent,
    BannerComponent,
    ProductlistComponent,
    FooterComponent,
    ProductboxComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
    AccountinComponent,

  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
