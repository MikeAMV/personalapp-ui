import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "../../app.component";
import { MainPersonalComponent } from "../../modules/personal/main-personal/main-personal.component";
import { MainUserComponent } from "../../modules/users/main-user/main-user.component";
import { SigninComponent } from "../../modules/auth/signin/signin.component";
import { NavigationComponent } from "../navigation/navigation.component";

const routes: Routes = [
  {
    path: "",
    component: NavigationComponent,
    pathMatch: "full",
  },
  {
    path: "personal",
    component: MainPersonalComponent,
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
})
export class AppRouterModule {}
