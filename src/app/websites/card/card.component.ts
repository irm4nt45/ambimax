import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card: Card;

  // @Input()
  // index: number;

  // id: number;

  @Output()
  cardSelected = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCardClick(){
    //this.id = this.item.id;
    //this.router.navigate(["/projects/" + this.id]);
    console.log("atliktasDarbas onItemClick has been execuetedd");

    this.cardSelected.emit(this.card);
  }

  
}
