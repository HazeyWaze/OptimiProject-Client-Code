import { Component,OnInit , Input, ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-dropdwn-item',
  templateUrl: './dropdwn-item.component.html',
  styleUrls: ['./dropdwn-item.component.css']
})
export class DropdwnItemComponent {

  @Input()  dataItem: any ;
  @Input() isNotSearching = true;
  
  constructor( private sanitizer: DomSanitizer){

  }

  getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

}
