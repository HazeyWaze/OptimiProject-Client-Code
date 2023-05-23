import { Component,OnInit , Input, ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import {NgbModal, ModalDismissReasons}   from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';

@Component({
  selector: 'app-dropdwn-item',
  templateUrl: './dropdwn-item.component.html',
  styleUrls: ['./dropdwn-item.component.css']
})
export class DropdwnItemComponent {

  @Input()  dataItem: any;
  @Input() isNotSearching = true;
  closeResult = '';
  newGroup: { id: number; name: string; url: string; }= { id: undefined, name: '', url:''}; 

  constructor( private sanitizer: DomSanitizer, private modalService: NgbModal, private dataService: DataService){

  }

  getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  open(content) {
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result)  => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  save(modal)
  {
    let resultId = 0;
    this.dataService.addGroup(this.dataItem.id,this.newGroup).subscribe(data => resultId = data.id); ;
    modal.close('Save click')
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }     
  }
}
