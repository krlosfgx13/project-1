import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormsComponent } from './pages/forms/forms.component';
import { MaterialComponent } from './pages/material/material.component';
import { Route2Component } from './pages/route2/route2.component';
import { ErrorComponent } from './pages/error/error.component';
import { Forms2Component } from './pages/forms2/forms2.component';
import { MaterialButtonsComponent } from './pages/material-buttons/material-buttons.component';
import { MaterialInputComponent } from './pages/material-input/material-input.component';
import { MaterialTabsComponent } from './pages/material-tabs/material-tabs.component';
import { MaterialDialogComponent } from './pages/material-dialog/material-dialog.component';
import { MaterialExpansionComponent } from './pages/material-expansion/material-expansion.component';
import { MaterialCardComponent } from './pages/material-card/material-card.component';
import { ModalComponent } from './pages/modal/modal.component';
import { MomentComponent } from './pages/moment/moment.component';
import { ChartsComponent } from './pages/charts/charts.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "route-2/:id/:slug", component: Route2Component },
    { path: "material", component: MaterialComponent },
    { path: "forms", component: FormsComponent },
    { path: "forms2", component: Forms2Component },
    { path: "material/buttons", component: MaterialButtonsComponent },
    { path: "material/input", component: MaterialInputComponent },
    { path: "material/tabs", component: MaterialTabsComponent },
    { path: "material/dialog", component: MaterialDialogComponent },
    { path: "material/card", component: MaterialCardComponent },
    { path: "material/expansion", component: MaterialExpansionComponent },
    { path: "modal", component: ModalComponent },
    { path: "moment", component: MomentComponent },
    { path: "charts", component: ChartsComponent },
    { path: "**", component: ErrorComponent } //must be at the end of the paths.
];
