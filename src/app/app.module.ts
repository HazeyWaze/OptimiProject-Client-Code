import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdwnItemComponent } from './dropdwn-item/dropdwn-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FocusDirective } from './focus.directive';
import { GroupTableComponent } from './group-table/group-table.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownComponent,
    DropdwnItemComponent,
    FocusDirective,
    GroupTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'app-group-table', component: GroupTableComponent}

    ],
    { onSameUrlNavigation: 'reload' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
