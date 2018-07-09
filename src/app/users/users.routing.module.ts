import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListComponent } from "./list/list.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "users",
    children: [
      { path: "", component: ListComponent },
      { path: "list", component: ListComponent },
      { path: "profile/:id", component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
