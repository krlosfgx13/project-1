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
import { ServicesComponent } from './pages/services/services.component';
import { LocalstorageComponent } from './pages/localstorage/localstorage.component';
import { Localstorage2Component } from './pages/localstorage2/localstorage2.component';
import { SessionstorageComponent } from './pages/sessionstorage/sessionstorage.component';
import { Sessionstorage2Component } from './pages/sessionstorage2/sessionstorage2.component';
import { CookieComponent } from './pages/cookie/cookie.component';
import { Cookie2Component } from './pages/cookie2/cookie2.component';
import { ApiRestComponent } from './pages/api-rest/api-rest.component';
import { RestApiCategoriesComponent } from './pages/rest-api-categories/rest-api-categories.component';
import { RestApiCategoriesAddComponent } from './pages/rest-api-categories-add/rest-api-categories-add.component';
import { RestApiCategoriesUpdateComponent } from './pages/rest-api-categories-update/rest-api-categories-update.component';
import { RestApiProductsComponent } from './pages/rest-api-products/rest-api-products.component';
import { LoginComponent } from './access/login/login.component';
import { SignupComponent } from './access/signup/signup.component';
import { AccessRestrictionComponent } from './access/access-restriction/access-restriction.component';
import { authGuard } from './guards/auth.guard';

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
    { path: "services", component: ServicesComponent },
    { path: "localstorage", component: LocalstorageComponent },
    { path: "localstorage2", component: Localstorage2Component },
    { path: "sessionstorage", component: SessionstorageComponent },
    { path: "sessionstorage2", component: Sessionstorage2Component },
    { path: "cookie", component: CookieComponent },
    { path: "cookie2", component: Cookie2Component },
    { path: "rest-api", component: ApiRestComponent },
    { path: "api/categorias", component: RestApiCategoriesComponent },
    { path: "api/categorias/add", component: RestApiCategoriesAddComponent },
    { path: "api/categorias/edit/:id", component: RestApiCategoriesUpdateComponent },
    { path: "api/productos", component: RestApiProductsComponent },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "access-restriction", canActivate: [authGuard], component: AccessRestrictionComponent }, //validation shuld work in order to access this.

    

    { path: "**", component: ErrorComponent } //must be at the end of the paths.
];
