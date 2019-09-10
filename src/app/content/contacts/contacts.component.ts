import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ActiveCompService } from '../activeCompService.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private title: Title, private meta: Meta, private service: ActiveCompService) { }

  ngOnInit() {
    this.title.setTitle('Kontaktai Tinklalapiai, app programeles');
    this.meta.updateTag({
        'description': 'kontaktai panevezys tinklalapiai'
    });
  }
  ngAfterViewInit(){
      this.service.getData();
        }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.router.navigateByUrl('/contacts');
    console.log('Back button pressed');
  }
}
