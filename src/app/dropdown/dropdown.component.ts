import { Component ,ViewChildren, QueryList,Directive, ViewChild} from '@angular/core';
import {DataService} from '../data.service';
import { AppComponent } from '../app.component';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [DataService]
})
export class DropdownComponent {
public selectedValue: any;
public searchValue ="";
public isNotSearching = true;
data: {id: number; name: string; image: { link: string; }; groups: { id: number; name: string; url: string; }[]; url: string; }[] = [];
datas  = new Array<any>();
@ViewChildren('focusMe') focusMe :QueryList<HTMLLinkElement>;
searchNotifier = new Subject();

length: 0;
domEles;
moveCell(e){
  const activeEle = document.activeElement;
  const activeEleIndex = Array.prototype.indexOf.call(this.domEles, activeEle);
  if(e.key == "ArrowDown" && activeEleIndex < this.length - 1 ) {
    (activeEle.nextElementSibling as HTMLElement)?.focus();      
  } 

  if(e.key == "ArrowUp" && activeEleIndex > 0) {
    (activeEle.previousElementSibling as HTMLElement)?.focus();
  }
  if(e.key == "Enter" ) {
    let index =  1+(activeEle.previousElementSibling as HTMLElement)?.tabIndex;
    this.selectValue(this.data[index]);
  }
}

initFocus()
{
    const ele = document.getElementsByName("focusMe");

    if (ele && ele.length >0)
    {
      (ele.item(0)  as HTMLElement)?.focus();
    }    
}


constructor(private dataService: DataService, private appComponent: AppComponent) {}
ngOnInit() {
  this.getData();

  this.domEles = document.querySelectorAll('.container > *');
  this.length = this.domEles.length;
  

  this.searchNotifier.pipe(debounceTime(500))
  .subscribe(data => 
    {
      if (this.searchValue.length >0)
      {
        this.isNotSearching = false;
        console.log(this.searchValue);
        this.getDataMatched(this.searchValue);
      }
      else {
        this.isNotSearching = true;
        this.getData();
      }
    });
}


getData()
{
  this.dataService.getData().subscribe(response => {
    this.data = response;
});
}

getDataMatched(pattern: string)
{
  this.dataService.getDataMatching(pattern).pipe(takeUntil(this.searchNotifier)).subscribe(response => {
    this.data = response;
    console.log(this.data);
});
}

filterDropdown(e :any) {
  console.log(this.searchValue);

  if (this.searchValue.length >0)
  {
    this.isNotSearching = false;
    console.log(this.searchValue);
    this.getDataMatched(this.searchValue);
  }
  else {
    this.isNotSearching = true;
    this.getData();
  }
}

selectValue(project: any) {
  this.appComponent.navigateToTable(project);

}
ngOnDestroy() {
  this.searchNotifier.complete();
}

}


