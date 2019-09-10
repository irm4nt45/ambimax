import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { ActiveCompService } from './content/activeCompService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{



  publicVariable:boolean = false;

  isItOpen(el: HTMLElement){
    this.publicVariable = true; 
    setTimeout( () => 
    { 
      el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }, 250 );
  }

  constructor(private router: Router, private vps: ViewportScroller,
    private title: Title,
        private meta: Meta,
        private service: ActiveCompService) { }

  ngOnInit() {
    this.title.setTitle('Tinklalapiai, app programeles');
        this.meta.updateTag({
            'description': 'paslaugos interneto tinklalapiai, parduotuves, app'
        });

        this.service.change.subscribe(emitedValue => {
          this.publicVariable = true;
       });
        // this.router.navigateByUrl('/');
  }
}
