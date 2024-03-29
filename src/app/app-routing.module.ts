import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "",
    pathMatch: 'full'
  },
  { 
    path: "**",
    redirectTo: "",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash:true,
      scrollPositionRestoration: "enabled"
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
