import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveLocationComponent } from './live-location/live-location.component';

const routes: Routes = [
  { path: '', redirectTo: 'location', pathMatch: 'full' },
  { path: 'location', component: LiveLocationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
