import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { BadgeComponent } from './badge.component';

@NgModule({
    imports: [
        CoreModule
    ],
    declarations: [
        BadgeComponent
    ],
    providers: [],
    exports: [BadgeComponent]

})

export class BadgeModule {