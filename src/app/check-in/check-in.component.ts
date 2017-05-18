import { Component, OnInit } from '@angular/core';
import {CheckInService} from "./check-in.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  constructor(
    private checkinService: CheckInService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  add(name: string, cellphone: string): void {
    var form_id = this.route.snapshot.queryParams["form_id"];

    name = name.trim();
    cellphone = cellphone.trim();

    this.checkinService.create(form_id, name, cellphone)
      // .then(data => {
      //   this.checkIfUserSignedUp(name,cellphone);
      // });
  }

  // checkIfUserSignedUp(form_id: string, cellphone: string){
  //   this.checkinService.getFormEntry(form_id, cellphone)
  //     .then(checkin => {
  //       this.checkins.push(checkin);
  //     }).catch(){
  //   }
  // }
}
