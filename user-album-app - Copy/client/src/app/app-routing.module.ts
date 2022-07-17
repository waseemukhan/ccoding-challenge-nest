import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserInfoComponent} from './components/user-info/user-info.component'

const routes: Routes = [
  {
    path:'',
    component: UserInfoComponent
  },
  {
    path:'user',
    component: UserInfoComponent
  },
  {
    path:'user/create',
    component: UserInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
