import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersRoutingModule } from './users.routing.module';
import { UsersService } from '../_services/users.service';

// imagine more imports here
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    
    UsersRoutingModule,

  ],
  declarations: [ListComponent, ProfileComponent],
  providers: [ UsersService]
})
export class UsersModule { }
