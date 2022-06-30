import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'wbadge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
    @Input() label;
    @Input() title;
    // @Output() modelChange = new EventEmitter()
    constructor() { }
}