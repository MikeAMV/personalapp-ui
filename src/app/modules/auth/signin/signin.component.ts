import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { User } from "../types/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
})
export class SigninComponent {
  loginValid: boolean = false;
  isLoading: boolean = false;
  logoPath = "../../../../assets/img/utez.png";

  user: User = {
    email: "",
    password: "",
  };
  session: any = {
    logged: false,
  };
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.session.logged = localStorage.getItem("token") ? true : false;
    if (this.session.logged) this.router.navigate(["/"]);
  }

  signin() {
    this.authService.login(this.user);
  }
}
