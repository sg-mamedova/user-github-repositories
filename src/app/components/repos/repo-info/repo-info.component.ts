import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-repo-info',
    templateUrl: './repo-info.component.html',
    styleUrls: ['./repo-info.component.scss']
})
export class RepoInfoComponent {
    repo: any;

    constructor(
        private dialogRef: MatDialogRef<RepoInfoComponent>,
        @Inject(MAT_DIALOG_DATA) data
    ) {
        this.repo = data.repo;
    }

    close() {
        this.dialogRef.close();
    }
}
