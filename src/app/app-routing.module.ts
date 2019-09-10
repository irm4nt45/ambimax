import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { WebsitesComponent } from 'src/app/websites/websites.component';
import { CreateWebsiteComponent } from './content/create-website/create-website.component';
import { CreateAppComponent } from './content/create-app/create-app.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { FindJobComponent } from './content/find-job/find-job.component';

const routes: Routes = [

    { path: 'website', component : CreateWebsiteComponent},
    { path: 'websites', component : WebsitesComponent },
    { path: 'app', component : CreateAppComponent },
    { path: 'contacts', component : ContactsComponent },
    { path: 'careers', component : FindJobComponent },
    { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/contacts',
  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
