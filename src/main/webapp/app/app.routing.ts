/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "app/login/login.component";
import { LegalEntityComponent } from "app/legal-entity/legal-entity.component";
import { TestComponent } from "app/test/test.component";
import { HomeComponent } from "app/home/home.component";


export const ROUTES: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'legalentity', component: LegalEntityComponent},
    {path: 'home', component: HomeComponent},
    {path: 'test', component: TestComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
