import {RouterModule} from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { FrontComponent } from './routes/front/front.component';
export const Routing = RouterModule.forRoot([
    {
        path: '',
        component: FrontComponent,
        children : [
            {
                path: '',
                component: HomeComponent
            }
        ]
    }
]);

