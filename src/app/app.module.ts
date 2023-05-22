import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdwnItemComponent } from './dropdwn-item/dropdwn-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownDirective } from './dropdown.directive';
import { FocusDirective } from './focus.directive';
import { GroupTableComponent } from './group-table/group-table.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownComponent,
    DropdwnItemComponent,
    DropdownDirective,
    FocusDirective,
    GroupTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'app-group-table', component: GroupTableComponent},
      {path: 'app-errorpage', component: ErrorpageComponent}

    ],
    { onSameUrlNavigation: 'reload' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
