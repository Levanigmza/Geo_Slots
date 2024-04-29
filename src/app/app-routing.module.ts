import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SlotsMenuComponent } from './slots-menu/slots-menu.component';
import { GeoTeamSlotComponent } from './geo-team-slot/geo-team-slot.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
    { path: '', component: SlotsMenuComponent },
    { path: 'geo-team', component: GeoTeamSlotComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
