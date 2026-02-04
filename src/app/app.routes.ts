import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { HireForm } from './hire-form/hire-form';
import { Projects } from './projects/projects';
import { About } from './about/about';
import { MyServices } from './my-services/my-services';
import { Footer } from './footer/footer';

export const routes: Routes = [
    
  { path: '', component: Landing }, 
  { path: 'hire-me', component: HireForm },
  { path: 'projects', component: Projects },
  { path: 'about', component: About },
  { path: 'my-service', component: MyServices },
  { path: 'footer', component: Footer }
];