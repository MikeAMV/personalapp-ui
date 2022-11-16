import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainPersonalComponent } from "./main-personal/main-personal.component";
import { ListPersonalComponent } from "./list-personal/list-personal.component";
import { AddPersonalComponent } from "./add-personal/add-personal.component";
import { FormsModule } from "@angular/forms";
import { materialModules } from "src/app/services/material.modules";

@NgModule({
  declarations: [
    MainPersonalComponent,
    ListPersonalComponent,
    AddPersonalComponent,
  ],
  imports: [CommonModule, FormsModule, ...materialModules],
  exports: [MainPersonalComponent],
  bootstrap: [MainPersonalComponent],
})
export class PersonalModule {}
