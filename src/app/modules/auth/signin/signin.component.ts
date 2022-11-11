import { Component } from "@angular/core";
import { User } from "../types/user";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
})
export class SigninComponent {
  loginValid: boolean = false;
  user: User = {
    username: "",
    password: "",
  };

  constructor() {}

  signin() {}
}
