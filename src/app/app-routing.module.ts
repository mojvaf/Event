import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {
  path: '',  component:AppComponent
},
{
  path: 'event/:id', component:EventComponent
},
{
  path: 'detail', component:DetailEventComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
         DetailEventComponent,
         EventComponent
]
