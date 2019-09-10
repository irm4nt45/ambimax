import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ActiveCompService } from '../activeCompService.service';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.scss']
})
export class FindJobComponent implements OnInit {

  items = {name:String, address:String};
  checkoutForm;

  //method to check if there is same unsaved data in the form
  // @HostListener('window:beforeunload', ['$event'])
  // unloadNotification($event: any){
  //   if(this.hasUnsavedData()){
  //     $event.returnValue = true;
  //   }
  // }

  constructor(
    private route: ActivatedRoute, private router: Router, private title: Title,
    private meta: Meta, private service: ActiveCompService
    // private cartService: CartService,
    // private formBuilder: FormBuilder,
  ) {
    // this.items = this.cartService.getItems();

    // this.checkoutForm = this.formBuilder.group({
    //   name: '',
    //   address: ''
    // });
  }
  ngOnInit(){
    this.title.setTitle('darbas seklbima');
    this.meta.updateTag({
        'description': 'darbo skelbimai'
    });
  }
  ngAfterViewInit(){
    this.service.getData();
      }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.router.navigateByUrl('/careers');
    console.log('Back button pressed');
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    // this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
