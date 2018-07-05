import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyTestComponent } from './shared/my-test/my-test.component';

const routes: Routes = [
  {
    path: '**', component: MyTestComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
