import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainPersonalComponent } from './main-personal/main-personal.component';
import { ListPersonalComponent } from './list-personal/list-personal.component';
import { AddPersonalComponent } from './add-personal/add-personal.component';

@NgModule({
  declarations: [
    MainPersonalComponent,
    ListPersonalComponent,
    AddPersonalComponent
  ],
  imports: [CommonModule],
  exports: [],
})
export class PersonalModule {}
