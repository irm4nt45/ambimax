import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CanDeactivateGuard } from './tools/can-deactivate-guard.service';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { CreateWebsiteComponent } from './content/create-website/create-website.component';
import { WebsitesComponent } from './websites/websites.component';
import { CardComponent } from './websites/card/card.component';
import { CreateAppComponent } from './content/create-app/create-app.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { FindJobComponent } from './content/find-job/find-job.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DropdownDirective } from './dropdown/dropdown.directive';
import { NavDirective } from './dropdown/nav.directive';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SelectTopicComponent } from './landing-page/select-topic/select-topic.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActiveCompService } from './content/activeCompService.service';

@NgModule({
  declarations: [
    AppComponent,

    CreateWebsiteComponent,
        WebsitesComponent,
        CardComponent,
        CreateAppComponent,
        ContactsComponent,
        FindJobComponent,

        DropdownDirective,
        NavDirective,
        FooterComponent,
        NavComponent,
        SelectTopicComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'website' }),
    AppRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    AnimateOnScrollModule.forRoot(),
  ],
  providers: [CanDeactivateGuard, ActiveCompService],
  bootstrap: [AppComponent]
})
export class AppModule { }
