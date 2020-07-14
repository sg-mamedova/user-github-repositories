import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
    openedRepo: any;

    constructor(
        private httpClient: HttpClient,
    ) { }

    getRepos(login: string): Observable<any> {
        const reposUrl: string = `https://api.github.com/users/${login}/repos`;

        return this.httpClient.get(reposUrl);
    }

    getUsers(): Observable<any> {
        const usersUrl = 'https://api.github.com/users';

        return this.httpClient.get(usersUrl);
    }

    searchUsers(query: string): Observable<any> {
        const requestURL = `https://api.github.com/search/users?q=${query}`;

        return this.httpClient.get(requestURL);
    }
}