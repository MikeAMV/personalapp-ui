import { LiveAnnouncer } from "@angular/cdk/a11y";
import { Component, OnInit, ViewChild } from "@angular/core";
import { PersonalService } from "../services/personal.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort, Sort } from "@angular/material/sort";
import { Personal } from "../types/personal";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AddPersonalComponent } from "../add-personal/add-personal.component";

@Component({
  selector: "app-main-personal",
  templateUrl: "./main-personal.component.html",
})
export class MainPersonalComponent implements OnInit {
  displayedColumns: string[] = [
    "name",
    "surname",
    "lastname",
    "birthday",
    "salary",
    "actions",
  ];

  get personal() {
    return new MatTableDataSource<Personal>(this.personalService.personal);
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly personalService: PersonalService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.personalService.getPersonal();
  }

  ngAfterViewInit() {
    this.personal.paginator = this.paginator;
    this.personal.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce("Sorting cleared");
    }
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const modalRef = this.dialog.open(AddPersonalComponent, {
      width: "50%",
      enterAnimationDuration,
      exitAnimationDuration,
    });
    modalRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
