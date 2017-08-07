        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { FormsModule } from '@angular/forms';
        import { CommonModule } from '@angular/common';
        import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
        import { HttpModule } from '@angular/http';
        import {ButtonModule} from 'primeng/primeng';
        import { RouterModule } from '@angular/router';
        import {PanelMenuModule} from 'primeng/primeng';
        import { AppComponent } from './app.component';

        @NgModule({
          declarations: [
            AppComponent
          ],
          imports: [
            BrowserAnimationsModule,
            BrowserModule,
            FormsModule,
            HttpModule,
            ButtonModule,
            CommonModule,
            RouterModule,
            PanelMenuModule,
          ],
          providers: [],
          bootstrap: [AppComponent]
        })
        export class AppModule {

        }
