import { Component } from '@angular/core';
import { WebsiteService } from './websites.service';
import { WEBSITES } from 'src/websites.db';

import { Card } from '../model/card';

// import paginate = require('jw-paginate');

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss'],
  providers: [WebsiteService]
})
export class WebsitesComponent {

  items = WEBSITES;

  p:any;

  // items = [];

  onCardSelected(card: Card){

    
    var _url = card.path; 

    window.open(_url);
    //window.location.href = _url;

    //make hyperlink here
    console.log("atliktiDarbai onItemSelected has been execueted" );
  }

  constructor() { 
  
    // this.config = {
    //   itemsPerPage: 9,
    //   currentPage: 1,
    //   totalItems: this.cards.count
    // };
  }

  

  // public category:string = "";

  // filterCardsByCategory(category:string){
  //   this.category = category;
  // }

  // public date: string = "";
  // filterCardsByDate(date:string){
  //   this.date = date;
  // }

}

