import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { Meta, Title } from '@angular/platform-browser';
import { ActiveCompService } from '../activeCompService.service';

@Component({
  selector: 'app-create-app',
  templateUrl: './create-app.component.html',
  styleUrls: ['./create-app.component.scss']
})
export class CreateAppComponent implements OnInit{
  faHotel = faHotel;
  faUtensils = faUtensils;
  faClinicMedical = faClinicMedical;
  faCar = faCar;
  faAnchor = faAnchor;
  faAddressCard = faAddressCard;
  faTags = faTags;
  faDumbbell = faDumbbell;
  faPrint = faPrint;

  clicked1: boolean = true;
  clicked2: boolean = false;
  clicked3: boolean = false;

  Clicked(button: number){
    if(button == 1){
      this.clicked1 = true;
      this.clicked2 = false;
      this.clicked3 = false;
    }

    if(button == 2){
      this.clicked1 = false;
      this.clicked2 = true;
      this.clicked3 = false;
    }

    if(button == 3){
      this.clicked1 = false;
      this.clicked2 = false;
      this.clicked3 = true;
    }
  }

  @Output() sendBoolean = new EventEmitter<any>();

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.router.navigateByUrl('/app');
    console.log('Back button pressed');
  }
  
  constructor(private route: ActivatedRoute, private router: Router, private title: Title,
    private meta: Meta, private service: ActiveCompService) { 

  }


  ngOnInit() {
    this.title.setTitle(' app programeles');
    this.meta.updateTag({
        'description': 'app programeles panevezys tinklalapiai'
        
    });
    //window.scrollTo(0, 800);
  }
  ngAfterViewInit(){
    this.service.getData();
      }

}
