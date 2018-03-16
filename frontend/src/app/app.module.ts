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
import { AppComponent } from './shared/app/app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FrontComponent } from './routes/front/front.component';
import { HomeComponent } from './routes/home/home.component';
import { BannerComponent } from './shared/banner/banner.component';
import { ProductlistComponent } from './routes/productlist/productlist.component';
import { FooterComponent } from './routes/footer/footer.component';
import { ProductboxComponent } from './shared/productbox/productbox.component';


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

  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
