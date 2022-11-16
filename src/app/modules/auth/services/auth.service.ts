import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { APP_URL } from "src/app/services/base-url.app";
import { User } from "../types/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(user: User) {
    this.httpClient
      .post<any>(APP_URL + "api/auth/", user, {
        headers: { "Content-Type": "application/json" },
      })
      .subscribe((response) => {
        localStorage.setItem("token", response.token);
        console.log(response);
        this.router.navigateByUrl("/");
      });
  }
}
