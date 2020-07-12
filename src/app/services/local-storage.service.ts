import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LocalStorageService {
    favoriteReposlist = [];
    favoriteReposKey = 'favorite_repos';
    localStorageChangedState = new BehaviorSubject<boolean>(false);

    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

    getSavedRepos(): any[] {
        return Object.values(this.storage.get(this.favoriteReposKey) || {});
    }

    removeFromLocalStorage(repo: any): void {
        const favoriteReposList = this.storage.get(this.favoriteReposKey) || {};

        delete favoriteReposList[repo.id];

        this.storage.set(this.favoriteReposKey, favoriteReposList);

        this.localStorageChangedState.next(true);
    }

    storeOnLocalStorage(repo: any): void {
        const favoriteReposList = this.storage.get(this.favoriteReposKey) || {};

        favoriteReposList[repo.id] = repo;

        this.storage.set(this.favoriteReposKey, favoriteReposList);
    }
}
