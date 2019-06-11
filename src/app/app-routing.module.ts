import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestUmComponent } from './components/test-um/test-um.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'teste',
    component: TestUmComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
