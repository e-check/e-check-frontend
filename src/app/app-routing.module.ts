import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckInResultComponent } from './check-in-result/check-in-result.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
    { path: '', redirectTo: '/checkin', pathMatch: 'full' },
    { path: 'checkin', component: CheckInComponent },
    { path: 'checkinresult', component: CheckInResultComponent},
    { path: 'signup', component: SignUpComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }