import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityTimerComponent } from './activity-timer/activity-timer.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path : 'active', component : ActivityTimerComponent},
  {path : '', component : TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
