import { NgModule } from "@angular/core";

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { FormsModule } from '@angular/forms';

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';

import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficaDonaComponent,
        AccountSettingsComponent
    ],

    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PagesRoutingModule,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule {}