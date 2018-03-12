import {RouterModule} from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { FrontComponent } from './routes/front/front.component';
import { ProductlistComponent } from './routes/productlist/productlist.component';
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
            }
        ]
    }
]);

