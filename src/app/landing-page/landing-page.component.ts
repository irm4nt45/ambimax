// import { Component, OnInit } from '@angular/core';
// import { ViewportScroller } from '@angular/common';
// import { Meta, Title } from '@angular/platform-browser';

// @Component({
//   selector: 'app-landing-page',
//   templateUrl: './landing-page.component.html',
//   styleUrls: ['./landing-page.component.scss']
// })
// export class LandingPageComponent implements OnInit {

//   publicVariable:boolean = false;

//   isItOpen(el: HTMLElement){
//     this.publicVariable = true; 
//     setTimeout( () => 
//     { 
//       el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
//       }, 250 );
//   }

//   constructor(private vps: ViewportScroller,
//     private title: Title,
//         private meta: Meta) { }

//   ngOnInit() {
//     this.title.setTitle('Tinklalapiai, app programeles');
//         this.meta.updateTag({
//             'description': 'paslaugos interneto tinklalapiai, parduotuves, app'
//         });
//   }

//   contactsClicked(){
//     this.publicVariable = true;
//   }
// }
