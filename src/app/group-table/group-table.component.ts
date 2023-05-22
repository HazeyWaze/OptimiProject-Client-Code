import { Component } from '@angular/core';
import { Router, Event} from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.css']
})
export class GroupTableComponent {
  public project;
  constructor(private router: Router,private location:Location , private sanitizer: DomSanitizer){

  }
  ngOnInit() {
    this.project = this.location.getState();
    this.router.events.subscribe((event: Event) => {
     
      this.project = this.location.getState();
      
     
    });
  }   
  
  getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
}
