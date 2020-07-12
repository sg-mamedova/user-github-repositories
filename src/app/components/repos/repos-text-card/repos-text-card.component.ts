import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-repos-text-card',
    templateUrl: './repos-text-card.component.html',
    styleUrls: ['./repos-text-card.component.scss']
})
export class ReposTextCardComponent implements OnInit {

    @Input() text: string;

    constructor() { }

    ngOnInit(): void {
    }
}
