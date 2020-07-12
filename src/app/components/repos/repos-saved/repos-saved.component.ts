import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { RepoInfoComponent } from '../repo-info/repo-info.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
    selector: 'app-repos-saved',
    templateUrl: './repos-saved.component.html',
    styleUrls: ['./repos-saved.component.scss']
})
export class ReposSavedComponent implements OnInit {
    repos: any = [];
    savedRepos = [];

    constructor(
        private dialog: MatDialog,
        private localStorageSerivce: LocalStorageService,
    ) { }

    openRepoInfo(repo): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            repo: repo,
        };
        dialogConfig.width = '450px';

        this.dialog.open(RepoInfoComponent, dialogConfig);
    }

    trackRepo(index, repo) {
        return repo ? repo.id : undefined;
    }

    ngOnInit() {
        this.localStorageSerivce.localStorageChangedState.subscribe(() => {
            this.repos = this.localStorageSerivce.getSavedRepos();
        });
    }
}
