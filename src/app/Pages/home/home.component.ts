import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 enteredSearchValue : string ='';
 @Output()
 searchTextChanged:EventEmitter<string> = new EventEmitter<string>();
 onSearchTextChanged(){
  this.searchTextChanged.emit(this.enteredSearchValue);

 }
}
