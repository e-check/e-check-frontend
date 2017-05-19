import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckInResultComponent } from './check-in-result/check-in-result.component';

const routes: Routes = [
    { path: '', redirectTo: '/checkin', pathMatch: 'full' },
    { path: 'checkin', component: CheckInComponent },
    { path: 'checkinresult', component: CheckInResultComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }