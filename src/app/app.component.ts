import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OptimiProject';

  constructor(private router: Router) { }

  ngOnInit()
  {
    this.router.navigate(['']);
  }

  public navigateToTable(project : {id: number; name: string; image: { link: string; }; groups: { id: number; name: string; url: string; }[]; url: string; }) {

    this.router.navigateByUrl('app-group-table',{state: project} );
  }
}
