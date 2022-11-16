import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Personal } from "../types/personal";
import { APP_URL } from "src/app/services/base-url.app";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PersonalService {
  personalUtez: Personal[] = [];
  get personal() {
    return [...this.personalUtez];
  }
  constructor(private readonly httpClient: HttpClient) {}
  getPersonal() {
    this.httpClient
      .get<Personal[]>(`${APP_URL}api/personal/`, {})
      .subscribe((response) => {
        console.log(response);
        this.personalUtez = response;
      });
  }
}
