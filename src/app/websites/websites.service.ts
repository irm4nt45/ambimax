import { WEBSITES } from 'src/websites.db';
import { Meta, Title } from '@angular/platform-browser';
import { OnInit } from '@angular/core';
import { ActiveCompService } from '../content/activeCompService.service';

export class WebsiteService implements OnInit {

    private cards = WEBSITES;

    constructor(private title: Title,
        private meta: Meta,
        private service: ActiveCompService){

    }

    ngOnInit(){
        this.title.setTitle('tinklalpiai dizainas');
        this.meta.updateTag({
            'description': ' panevezys tinklalapiai'
        });
    }
    ngAfterViewInit(){
        this.service.getData();
          }

    getCards(id: number){
        return this.cards[id];
    }
    getSimilarCards(category: string){
        if(this.cards[category] === category){
            
        }
        return this.cards.get
    }
}