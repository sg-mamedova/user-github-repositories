import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { Subscription, fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    errorMessage: string = '';
    searchInvalid: boolean = false;
    subscriptions: Subscription = new Subscription();
    users: any = [];

    @ViewChild('search') searchInput: ElementRef;

    constructor(
        private usersService: UsersService,
    ) { }

    searchUsers(query: string) {
        this.subscriptions.add(
            this.usersService.searchUsers(query).subscribe(
                (value) => {
                    this.users = value.items;
                },
                (error) => {
                    this.searchInvalid = true;
                    this.errorMessage = error.message;
                }
            ),
        );
    }

    trackUser(index, user) {
        return user ? user.id : undefined;
    }

    ngOnInit(): void {
        this.subscriptions.add(
            this.usersService.getUsers().subscribe(
                (value) => {
                    this.users = value;
                },
                (error) => {
                    console.error(error);
                }
            )
        );
    }

    ngAfterViewInit() {
        fromEvent(this.searchInput.nativeElement, 'keyup')
            .pipe(
                filter(Boolean),
                debounceTime(500),
                distinctUntilChanged(),
                tap(() => {
                    if (this.searchInput.nativeElement.value) {
                        this.searchUsers(this.searchInput.nativeElement.value);
                    }
                })
            )
            .subscribe();
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
