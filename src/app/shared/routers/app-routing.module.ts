import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "../../app.component";
import { MainPersonalComponent } from "../../modules/personal/main-personal/main-personal.component";
import { MainUserComponent } from "../../modules/users/main-user/main-user.component";
import { SigninComponent } from "../../modules/auth/signin/signin.component";
import { NavigationComponent } from "../navigation/navigation.component";
import { MainPositionComponent } from "../../modules/positions/main-position/main-position.component";

const routes: Routes = [
  {
    path: "",
    component: MainPersonalComponent,
    pathMatch: "full",
  },
  {
    path: "personal",
    component: MainPersonalComponent,
  },
  {
    path: "position",
    component: MainPositionComponent,
  },
  {
    path: "user",
    component: MainUserComponent,
  },
  {
    path: "auth",
    component: SigninComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppRouterModule {}
