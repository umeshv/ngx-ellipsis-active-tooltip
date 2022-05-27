import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EllipsisActiveDirective } from './directives/ellipsis-active.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatEllipsisActiveDirective } from './directives/mat-ellipsis-active.directive';

@NgModule({
  declarations: [
    AppComponent,
    EllipsisActiveDirective,
    MatEllipsisActiveDirective,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MatTooltipModule],
  exports: [EllipsisActiveDirective, MatEllipsisActiveDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
