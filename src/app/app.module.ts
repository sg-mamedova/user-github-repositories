import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ReposComponent } from './components/repos/repos/repos.component';
import { RepoInfoComponent } from './components/repos/repo-info/repo-info.component';
import { UsersService } from './services/users.service';
import { LocalStorageService } from './services/local-storage.service';
import { ReposSavedComponent } from './components/repos/repos-saved/repos-saved.component';
import { RepoCardComponent } from './components/repos/repo-card/repo-card.component';
import { ReposTextCardComponent } from './components/repos/repos-text-card/repos-text-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RepoCardComponent,
        RepoInfoComponent,
        ReposComponent,
        ReposSavedComponent,
        ReposTextCardComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
        MatTooltipModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        HttpClientModule,
        LocalStorageService,
        UsersService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
