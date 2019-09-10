import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ActiveCompService } from '../activeCompService.service';

@Component({
  selector: 'app-create-website',
  templateUrl: './create-website.component.html',
  styleUrls: ['./create-website.component.scss']
})
export class CreateWebsiteComponent implements OnInit {

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

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.router.navigateByUrl('/website');
    console.log('Back button pressed');
  }
  
  constructor(private route: ActivatedRoute, private router: Router, private title: Title,
    private meta: Meta, private service: ActiveCompService) { }

  ngOnInit() {
    this.title.setTitle('Tinklalapiai');
    this.meta.updateTag({
        'description': 'kontaktai panevezys tinklalapiai'
    });
  }
  ngAfterViewInit(){
    this.service.getData();
      }

}
