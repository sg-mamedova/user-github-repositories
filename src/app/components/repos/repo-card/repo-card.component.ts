import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { LocalStorageService } from 'src/app/services/local-storage.service';

import { RepoInfoComponent } from '../repo-info/repo-info.component';

@Component({
    selector: 'app-repo-card',
    templateUrl: './repo-card.component.html',
    styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent {
    @Input() repo;
    @Input() useRemoveButton: boolean = false;

    constructor(
        private dialog: MatDialog,
        private localStorageService: LocalStorageService,
    ) { }

    isRepoSaved(repo): boolean {
        return repo.saved;
    }

    openRepoInfo(repo): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            repo: repo,
        };
        dialogConfig.width = '450px';

        this.dialog.open(RepoInfoComponent, dialogConfig);
    }

    removeRepo(repo) {
        this.localStorageService.removeFromLocalStorage(repo);
    }

    toggleRepo(repo) {
        if (this.isRepoSaved(repo)) {
            repo.saved = false;
            this.localStorageService.removeFromLocalStorage(repo);
        } else {
            repo.saved = true;
            this.localStorageService.storeOnLocalStorage(repo);
        }
    }
}
