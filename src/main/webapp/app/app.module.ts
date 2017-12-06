import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ROUTING } from "./app.routing";
import { LoginComponent } from './login/login.component';
import { LegalEntityComponent } from "app/legal-entity/legal-entity.component";
import { SideNavComponent } from './side-nav/side-nav.component';
import { TestComponent } from './test/test.component';
import { SubnavComponent } from './subnav/subnav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LegalEntityComponent,
        SideNavComponent,
        TestComponent,
        SubnavComponent,
        HomeComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        ClarityModule,
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
