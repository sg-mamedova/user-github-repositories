import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../../services/users.service';
import { RepoInfoComponent } from '../repo-info/repo-info.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-repos',
    templateUrl: './repos.component.html',
    styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit, OnDestroy {
    login: string;
    loaded: boolean = false;
    repos: any = [];
    savedRepos = [];
    subscriptions: Subscription = new Subscription();

    constructor(
        private dialog: MatDialog,
        private route: ActivatedRoute,
        private usersSerivce: UsersService,
        private localStorageSerivce: LocalStorageService,
    ) {
        this.subscriptions.add(
            this.route.params.subscribe((params) => {
                this.login = params.login;
            }),
        );
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

    trackRepo(index, repo) {
        return repo ? repo.id : undefined;
    }

    ngOnInit() {
        this.subscriptions.add(
            this.usersSerivce.getPepos(this.login).subscribe(
                (repos) => {
                    const savedRepos = this.localStorageSerivce.getSavedRepos()
                    this.repos = repos.map((repo) => {
                        repo.saved = !!savedRepos[repo.id];
                        return repo;
                    });
                },
                (error) => {
                    console.error(error);
                }
            ),
        );
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
