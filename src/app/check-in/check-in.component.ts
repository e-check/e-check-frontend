import { Component, OnInit } from '@angular/core';
import { CheckInService } from "./check-in.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  constructor(
    private checkinService: CheckInService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  activity_name: String;

  ngOnInit() {
    var activity_id = this.activateRoute.snapshot.queryParams["activity_id"];
    this.checkinService
      .getActivity(activity_id)
      .then(activity => this.activity_name = activity.name)
  }

  add(name: string, cellphone: string): void {
    var activity_id = this.activateRoute.snapshot.queryParams["activity_id"];

    name = name.trim();
    cellphone = cellphone.trim();
    this.checkinService
      .create(activity_id, name, cellphone)
      .then(this.checkIfUserSignedUp.bind(this))
      .catch(this.handleCheckinException)
  }

  handleCheckinException(error: any){
    if(error.status == 400){
      alert('您已经签过到了')
    }
  }

  checkIfUserSignedUp(data) {
    var activity_id = data['activity_id']
    var cellphone = data['cellphone']
    this.checkinService
      .getFormEntry(activity_id, cellphone)
      .then(data => this.router.navigate(['/checkinresult']))
      .catch(data => this.router.navigate(['/signup']))
  }
}
