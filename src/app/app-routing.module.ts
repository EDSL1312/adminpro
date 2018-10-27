import { Routes, RouterModule } from '@angular/router';
import { LogginComponent } from './loggin/loggin.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './loggin/register.component';

const routes: Routes = [

  { path: 'login', component: LogginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );