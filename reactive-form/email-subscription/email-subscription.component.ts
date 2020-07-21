import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-email-subscription',
  templateUrl: './email-subscription.component.html',
  styleUrls: ['./email-subscription.component.css']
})
export class EmailSubscriptionComponent implements OnInit {

  email = new FormControl('');
  subscriberEmail='';

  constructor() { }

  ngOnInit(): void {
  }


  subscribeUser(){
    this.subscriberEmail = this.email.value;
  }


}
