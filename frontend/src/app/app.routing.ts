import {RouterModule} from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { FrontComponent } from './routes/front/front.component';
import { ProductlistComponent } from './routes/productlist/productlist.component';
import { AccountComponent } from './routes/account/account.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { AccountinComponent } from './shared/accountin/accountin.component';

export const Routing = RouterModule.forRoot([
    {
        path: '',
        component: FrontComponent,
        children : [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'food',
                component: ProductlistComponent
            },
            {
                path: 'checkout',
                component: AccountComponent,
                children: [
                    {
                        path: '',
                        component: AccountinComponent
                    },
                    {
                        path: 'login',
                        component: LoginComponent
                    },
                    {
                        path: 'register',
                        component: RegisterComponent
                    }
                ]
            }
        ]
    }
]);

