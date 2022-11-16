import { DialogRef } from "@angular/cdk/dialog";
import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-add-personal",
  templateUrl: "./add-personal.component.html",
})
export class AddPersonalComponent implements OnInit {
  constructor(public modal: DialogRef<AddPersonalComponent>) {}

  ngOnInit(): void {}
}
