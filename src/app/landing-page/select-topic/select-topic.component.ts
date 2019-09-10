import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-topic',
  templateUrl: './select-topic.component.html',
  styleUrls: ['./select-topic.component.scss']
})
export class SelectTopicComponent implements OnInit {

  value : boolean = false;
  @Output() selected = new EventEmitter<any>();

  buttonName : String = "Pasirinkite Jus dominančią temą";

  constructor() { }

  ngOnInit() {
  }

  themeSelected(event){
    // var target = 
    this.selected.emit(null); 
    this.buttonName = event.target.name; 
  }
}
