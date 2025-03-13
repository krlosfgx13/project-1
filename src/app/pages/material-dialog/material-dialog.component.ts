import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-material-dialog',
  imports: [MatDialogModule, RouterLink, MatButtonModule],
  templateUrl: './material-dialog.component.html',
  styleUrl: './material-dialog.component.css'
})
export class MaterialDialogComponent {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  open(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px'
    })

  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog.component.html',
  imports: [MatDialogModule],
})

export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) { }
}
