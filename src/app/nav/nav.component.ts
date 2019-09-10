import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  faArrowDown = faArrowDown;

  //bntStyle: string;
  isAddButton :boolean;
  @Output() selected = new EventEmitter<any>();

  constructor() {
    //this.bntStyle = 'active';
    this.isAddButton = true;
   }

  ngOnInit() {
  }

  submit(){
    this.isAddButton = !this.isAddButton;
    // if(this.bntStyle = 'active'){
    //   this.bntStyle = 'cross';
    // } else{
    //   this.bntStyle = 'active';
    //   console.log('x is less than or equal to y.');
    // }
  }

  themeSelected(event){
    this.selected.emit(null); 
  }
}
